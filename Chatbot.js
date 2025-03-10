import { useState, useEffect, useRef } from "react";
import "./Chatbot.css";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" }
  ]);
  const [userInput, setUserInput] = useState("");

  const chatBoxRef = useRef(null); // Ref for auto-scrolling

  // Predefined chatbot responses
  const responses = {
    "how are you": [
        "I'm just a bot, but I'm feeling great! What about you?",
    ],
    "help me": [
        "Of course! What do you need help with?",
    ],
    "hello": [
        "Hello! What can I do for you today?",
    ],
    "what is your name?": [
        "I'm Sky, your friendly chatbot."
    ],
    "who created you?": [
        "A group of humans brought me to life.",
    ],
    "are you a robot?": [
        "I'm a virtual assistant powered by artificial intelligence.",
    ],
    "can you talk?": [
        "Yes, I can communicate through text.",
    ],
    "okay": [
        "Great! Let me know if you need anything else.",
    ],
    "thanks": [
        "You're welcome!",
    ],
    "thank you": [
        "You're welcome!",
    ],
    "default": [
        "I'm still learning. Can you ask me something else?",
    ]
};

  // Function to handle sending messages
  const handleSend = () => {
    if (userInput.trim()) {
      const userMessage = { text: userInput, sender: "user" };
      const lowerCaseInput = userInput.toLowerCase().trim();

      // Find response (case-insensitive)
      let botReply = responses.default;
      for (let key in responses) {
        if (lowerCaseInput === key.toLowerCase().trim()) {
          botReply = responses[key];
          break;
        }
      }

      const botResponse = { text: botReply, sender: "bot" };

      setMessages((prevMessages) => [...prevMessages, userMessage, botResponse]);
      setUserInput(""); // Clear input field
    }
  };

  // Function to handle "Enter" key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-box" ref={chatBoxRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyPress} // Handle Enter key
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
