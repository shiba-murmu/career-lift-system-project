import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
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
    const callGeminiAPI = async (prompt) => {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY; // Assuming you're using Vite

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        const headers = {
            "Content-Type": "application/json",
        };

        const data = {
            contents: [
                {
                    parts: [{ text: prompt }]
                }
            ]
        };

        try {
            const response = await axios.post(url, data, { headers });
            const reply = response.data.candidates[0]?.content?.parts[0]?.text || "No response from AI.";
            return reply;
        } catch (error) {
            console.error("Gemini API Error:", error.message);
            return "Error calling Gemini API.";
        }
    };
    const handleSend = async () => {
        if (input.trim()) {
            const userMessage = { text: input, sender: "user" };
            setMessages((prev) => [...prev, userMessage]);
            setInput("");

            // Call Gemini API and get response
            const aiReply = await callGeminiAPI(input);

            const aiMessage = { text: aiReply, sender: "ai" };
            setMessages((prev) => [...prev, aiMessage]);
        }
    };

    return (
        <>
            <div className="p-0 md:p-10 bg-[#e0e8ff] dark:bg-neutral-900 min-h-screen ">
                <div
                    className={`flex flex-col ${isFullScreen ? "h-screen" : "h-[80vh] max-w-4xl mx-auto"
                        } bg-gray-100`}
                >
                    {/* Chat Header */}
                    <div className="flex justify-center p-2 bg-neutral-600 md:p-4 md:bg-indigo-600 dark:bg-neutral-700 dark:text-blue-200  text-white shadow-md">
                        <span className="text-xl font-semibold">AI ASSISTANT</span>
                    </div>

                    {/* Chat Messages */}
                    <div
                        ref={messagesContainerRef}
                        className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-300  dark:bg-neutral-800"
                    >
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`max-w-[75%] p-3 rounded-lg shadow-md text-sm ${message.sender === "user"
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
                    <div className="p-3 md:p-5 bg-white dark:bg-neutral-800 shadow-md">
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
                                className="ml-3  px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-all"
                                onClick={handleSend}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ai;
