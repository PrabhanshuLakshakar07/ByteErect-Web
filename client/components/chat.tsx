"use client";
import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Bot responses with more greetings and basic replies
    let botResponse = "Sorry, I didn't understand that.";

    const userInput = input.toLowerCase();

    // Greeting responses
    if (userInput.includes("hi") || userInput.includes("hello") || userInput.includes("hey")) {
      botResponse = "Hello from Byteerect! How can I help you today?";
    } else if (userInput.includes("how are you")) {
      botResponse = "I'm doing great, thank you for asking! From Byteerect, with love!";
    } else if (userInput.includes("bye") || userInput.includes("goodbye")) {
      botResponse = "Goodbye from Byteerect! Have a great day!";
    } else if (userInput.includes("thank you") || userInput.includes("thanks")) {
      botResponse = "You're welcome! 😊 Let me know if you need more help!";
    } else if (userInput.includes("what's your name") || userInput.includes("who are you")) {
      botResponse = "I am Byteerect's friendly chatbot! 🤖 How can I assist you?";
    }

    const botMsg = { sender: "bot", text: botResponse };
    setMessages((prev) => [...prev, botMsg]);
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4 bg-gray-900 text-white">
      <div className="border p-4 h-96 overflow-y-auto bg-gray-800 rounded">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded my-1 ${
              msg.sender === "user"
                ? "text-right text-blue-400"
                : "text-left text-green-400"
            }`}
          >
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border p-2 rounded bg-gray-700 text-white placeholder-gray-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
      <div className="text-center mt-4 text-gray-500">
        <p>Powered by <strong>Byteerect</strong></p>
      </div>
    </div>
  );
}
