import { useState, useEffect, useRef } from "react";

export default function DoctorsAdvice() {
  // State to manage the messages and the input field
  const [messages, setMessages] = useState([
    { sender: "Doctor", text: "Hello, how can I assist you today?" },
  ]);
  const [inputMessage, setInputMessage] = useState(""); // input field message

  // Ref to the chat container for scrolling
  const chatContainerRef = useRef(null);

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    // Update messages with user's message
    setMessages([...messages, { sender: "Patient", text: inputMessage }]);
    setInputMessage(""); // Clear input field after sending message

    // Simulate doctor response
    setTimeout(() => {
      const doctorResponse = "I'm here to help with your diabetes management.";
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "Doctor", text: doctorResponse },
      ]);
    }, 1000); // Simulating delay in doctor response
  };

  // Auto-scroll to the bottom whenever messages update
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full p-4">
      <div className="bg-gray-100 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Doctor's Advice</h2>

        {/* Chat box */}
        <div
          className="bg-white p-4 rounded-lg h-96 overflow-y-auto"
          ref={chatContainerRef} // Attach ref to the chat container
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex mb-4 ${
                message.sender === "User" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  message.sender === "User"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-900"
                }`}
              >
                <p className="font-bold">{message.sender}</p>
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input field */}
        <div className="flex mt-4">
          <input
            type="text"
            className="flex-grow p-2 border rounded-l-lg focus:outline-none"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white p-2 rounded-r-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
