import React from "react";
import { useMediaQuery } from "react-responsive";
import "./MessagesPage.css";
import Groups from "../../components/Groups/Groups";
import Messages from "../../components/Messages/Messages";
import ChatRoomDetails from "../../components/ChatRoomDetails/ChatRoomDetails";

function MessagesPage(props) {
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="MessagesPage">
      {isDesktop && (
        <>
          <Groups />
          <Messages />
          <ChatRoomDetails />
        </>
      )}
      {isTablet && (
        <>
          <Groups />
          <Messages />
        </>
      )}
      {isMobile && (
        <>
          <Groups />
        </>
      )}
    </div>
  );
}

export default MessagesPage;
