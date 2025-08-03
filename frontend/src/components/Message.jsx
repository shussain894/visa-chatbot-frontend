import React from "react";

function Message({ role, text, nextQuestion, finalDecision }) {
  return (
    <div className={`message ${role}`}>
      <p><strong>{role === "user" ? "You" : "Bot"}:</strong> {text}</p>
      {nextQuestion && (
        <p className="follow-up">💬 {nextQuestion}</p>
      )}
      {finalDecision && (
        <p className="decision">✅ Final decision: {finalDecision}</p>
      )}
    </div>
  );
}

export default Message;
