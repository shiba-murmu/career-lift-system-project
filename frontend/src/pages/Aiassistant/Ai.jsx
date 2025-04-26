import React, { useState, useEffect, useRef } from "react";

const Ai = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsFullScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "This is an AI response.", sender: "ai" },
        ]);
      }, 1000);
    }
  };

  return (
    <>
      <div className="p-0 md:p-10 bg-gray-200 dark:bg-neutral-800 min-h-screen ">
        <div
          className={`flex flex-col ${
            isFullScreen ? "h-screen" : "h-[80vh] max-w-4xl mx-auto"
          } bg-gray-100`}
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 bg-indigo-600 dark:bg-neutral-700 text-white shadow-md">
            <h1 className="text-lg font-semibold">AI Chat</h1>
          </div>

          {/* Chat Messages */}
          <div
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-500  dark:bg-neutral-900"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] p-3 rounded-lg shadow-md text-sm ${
                    message.sender === "user"
                      ? "bg-indigo-800 text-white dark:bg-neutral-700 "
                      : "bg-gray-200 dark:bg-neutral-700 dark:text-white text-black"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="p-3 md:p-5 bg-white dark:bg-neutral-900 shadow-md">
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2">
              <input
                type="text"
                className="flex-1 text-sm px-4 py-2 border-none focus:outline-none"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                className="ml-3 px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-all"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ai;
