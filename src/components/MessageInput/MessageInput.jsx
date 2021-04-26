import React, { useState } from "react";
import "./MessageInput.css";

function MessageInput(props) {
  const [content, setContent] = useState("");

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleSubmitMessage = async (e) => {
    e.preventDefault();
    let body = {
      sender: props.user._id,
      content: content,
    };
    setContent("");
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    // CHANGE ADDRESS TO DYNAMIC ID
    const response = await fetch(
      "/api/messages/6084788ba9ed372d258802bc",
      options
    );
    await response.json();
  };

  return (
    <div className="MessageInput">
      <form onSubmit={(e) => handleSubmitMessage(e)}>
        <input
          type="text"
          placeholder="type your message.."
          onChange={(e) => handleChangeContent(e)}
          value={content}
        />
        <button>
          <span className="material-icons md-light">send</span>
        </button>
      </form>
    </div>
  );
}

export default MessageInput;
