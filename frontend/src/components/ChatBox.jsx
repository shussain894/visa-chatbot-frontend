import React, { useState } from "react";
import axios from "axios";
import Message from "./Message";

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const userMessage = { role: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await axios.post("http://localhost:5000/check", {
        userMessage: userInput,
      });

      const { message, nextQuestion, finalDecision } = res.data;

      const botMessage = {
        role: "bot",
        text: message,
        nextQuestion,
        finalDecision,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Sorry, something went wrong." },
      ]);
    }

    setUserInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((msg, idx) => (
          <Message key={idx} {...msg} />
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Ask about UK visas..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatBox;
