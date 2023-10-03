import React, { useState } from "react";
import Layout from "../components/Layout";
import botImg from "../images/chatbot1.gif";
import TelegramIcon from '@mui/icons-material/Telegram';
import arrayOfPossibleMessage from "../Data/BotScript";

const Chatbot = () => {

    //userMsg
    const [userMessage, setUserMessage] = useState("");

    //chatbotMsg
    const [chatMessages, setChatMessages] = useState([]);


    ///Dataset....................

    //handleUserMsg
    const handleUserMessageChange = (e) => {
        setUserMessage(e.target.value);
    }

    //sending the msg
    const sendMessage = (message, sender) => {
        setChatMessages((prevMessages) => [...prevMessages, { message, sender }]);
    }


    //chatbotResponse
    const chatbotResponse = (userMessage) => {

        const matchedResponse = arrayOfPossibleMessage.find(val =>
            val.message.toLowerCase() === userMessage.toLowerCase()
        );

        let responseToSet = "";

        if (matchedResponse) {
            responseToSet = matchedResponse.response;
        } else {
            const wordsInUserMessage = userMessage.toLowerCase().split(" ");
            for (let i = 0; i < wordsInUserMessage.length; i++) {
                const word = wordsInUserMessage[i];

                const matchedWordResponse = arrayOfPossibleMessage.find(val => val.message.toLowerCase().includes(word));

                if (matchedWordResponse) {
                    responseToSet = matchedWordResponse.response;
                    break;
                }
            }
        }

        if (responseToSet) {
            sendMessage(responseToSet, 'chatbot');
        } else {
            sendMessage("Please send another message", 'chatbot');
        }
    }


    //sumbitHandlerBtn
    const submitHandleBtn = (e) => {
        e.preventDefault();
        if (userMessage.trim() === "") {
            alert('Please type a message');
            return;
        }

        const userMessageText = userMessage.trim();
        sendMessage(userMessageText, 'user');
        chatbotResponse(userMessageText);

        setUserMessage(""); // Clear the input after sending
    }

    return (
        <Layout>
            <div className='backimg_1' style={{ minHeight: "100%" }}>
                <div className="container" style={{ padding: "5px" }}>
                    <div style={{ border: "1px solid black", marginTop: "15px" }}>
                        <div className="media" style={{ height: "100px", backgroundColor: 'whitesmoke' }}>
                            <img
                                src={botImg}
                                style={{ float: "left", margin: "10px" }}
                                className="rounded-circle float-left img-thumbnail"
                                width="75px"
                                alt="Chatbot"
                            />
                            <div className="media-body" style={{ float: "left" }}>
                                <h5 style={{ margin: "10px", marginTop: "15px" }}>Chatbot</h5>
                                <span style={{ marginLeft: "10px", color: "rgb(32,199,32)" }}>online</span>
                            </div>
                        </div>
                        <div
                            id="chatContainer"
                            className="container overflow-auto"
                            style={{ height: "300px", overflow: 'auto' }}
                        >
                            {chatMessages.map((chat, index) => (
                                <div
                                    key={index}
                                    className={`message ${chat.sender}`}
                                    style={{ textAlign: chat.sender === 'user' ? 'right' : 'left', marginBottom: '10px' }}
                                >
                                    <span>{chat.sender === 'user' ? chat.message + ' : You' : 'Chatbot : ' + chat.message} </span>
                                    {/* {chat.message} */}
                                </div>
                            ))}
                        </div>
                        <div className="input-group">
                            <form
                                className="input-group"
                                onSubmit={submitHandleBtn}
                                style={{ marginBottom: 10, padding: 5 }}
                            >
                                <input
                                    id="textbox"
                                    type="text"
                                    className="form-control"
                                    onChange={handleUserMessageChange}
                                    value={userMessage}
                                    placeholder="Type your message here..."
                                    style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
                                />
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <TelegramIcon onClick={submitHandleBtn} style={{ cursor: "pointer" }} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Chatbot;