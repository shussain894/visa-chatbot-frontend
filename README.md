# 🇬🇧 UK Visit Visa Chatbot

A simple full-stack chatbot to help users determine their UK visit visa eligibility using a rule-based system and optional LLM fallback. Built with React, Node.js (Express), llama3 and MongoDB.

## ✨ Features
- Chat interface to ask questions about UK visit visa rules.
- Rule-based backend with visa eligibility, TB test, and purpose logic.
- Friendly, formatted bot responses.
- Logs each session to MongoDB with details like:
  - User question
  - Matched visa type / country
  - TB test requirement
  - LLM fallback (if used)

## 🧱 Tech Stack
React -	Node - Express - MongoDB

## 🚀 How to Run Locally
1. Clone the repository
   ```bash
   git clone https://github.com/shussain894/visa-chatbot-frontend
   cd visa-chatbot-frontend
   cd frontend
   ```
   
2. Install frontend dependencies
   ```bash
   npm install
   ```
3. Start frontend (React)
    ```bash
   npm start
      ```
   Runs on http://localhost:5173.

Please ensure the backend server, database and the llama3 server are running first
[backend](https://github.com/shussain894/visa-chatbot-backend)

