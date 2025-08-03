import React from "react";
import '../App.css'

function Message({ role, text, nextQuestion, finalDecision }) {
  const formatMessage = (message) => {
    if (!message) return [];

    message = message.replace(/\*\*/g, "");

    const eligibilityTag = "Eligibility details include:";
    const tagIndex = message.indexOf(eligibilityTag);

    if (tagIndex !== -1) {
      const before = message.slice(0, tagIndex).trim();
      const after = message.slice(tagIndex + eligibilityTag.length).trim();

      const fieldMatches = [...after.matchAll(/(\w+):\s*([^:]+?)(?=,\s*\w+:|$)/g)];

      const formattedFields = fieldMatches.map(([_, key, value]) => {
        const label = key
          .replace(/_/g, " ")
          .replace(/^\w/, (c) => c.toUpperCase());
        return `• ${label}: ${value.trim()}`;
      });

      const remainingMessage = after
        .replace(/(\w+):\s*([^:]+?)(?=,\s*\w+:|$)/g, "")
        .replace(/^,|,$/g, "")
        .replace(/,{2,}/g, ",")
        .split(",")
        .map(part => part.trim())
        .filter(Boolean);

      return [
        before,
        eligibilityTag,
        ...formattedFields,
        ...remainingMessage,
      ].filter(Boolean);

    }

    return message.split(/\n|(?<=\.)\s/);
  };

  const formattedLines = formatMessage(text);

  return (
    <div className={`message ${role}`}>
      <p><strong className="message-role">{role === "user" ? "You" : "Bot"}:</strong></p>
      {formattedLines.map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
      {nextQuestion && <p className="follow-up">💬 {nextQuestion}</p>}
      {finalDecision && <p className="decision">✅ Final decision: {finalDecision}</p>}
    </div>
  );
}

export default Message;
