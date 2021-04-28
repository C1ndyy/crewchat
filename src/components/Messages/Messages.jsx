import React, { useState } from "react";
import "./Messages.css";
import MessageInput from "../../components/MessageInput/MessageInput";
import MessagesList from "../../components/MessagesList/MessagesList";
import MessageHeader from "../../components/MessageHeader/MessageHeader";
import useChat from "../../utils/useChat";

function Messages({ setShowDetails, activeGroup, user, setActiveGroup }) {
  const {
    messages,
    setMessages,
    sendMessage,
    sendEventMsg,
    goingEvent,
    notGoingEvent,
  } = useChat(activeGroup._id, user);
  const [memoryMessage, setMemoryMessage] = useState([]);

  async function fetchMessage(groupId) {
    try {
      let jwt = localStorage.getItem("token");
      const fetchResponse = await fetch(`/api/groups/${groupId}`, {
        headers: { Authorization: "Bearer " + jwt },
      });
      let allMsgs = await fetchResponse.json();
      setMessages(allMsgs);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="Messages">
      <MessageHeader
        setShowDetails={setShowDetails}
        groupName={activeGroup.name}
        setActiveGroup={setActiveGroup}
      />
      <MessagesList
        groupId={activeGroup._id}
        user={user}
        messages={messages}
        setSocketMessages={setMessages}
        fetchMessage={fetchMessage}
        goingEvent={goingEvent}
        notGoingEvent={notGoingEvent}
      />
      <MessageInput
        user={user}
        groupId={activeGroup._id}
        sendMessage={sendMessage}
        sendEventMsg={sendEventMsg}
      />
    </div>
  );
}

export default Messages;
