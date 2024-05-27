import { useState } from "react";

const IndividualChat = ({ messages }) => {
  const [noMsg, setNoMsg] = useState(null);

  if (!messages) {
    return;
  }

  console.log(messages);

  return (
    <div className="individual">
      {messages.length === 0 && (
        <div className="showMessages">
          <p>Chat empty! sent a message to start chatting</p>
        </div>
      )}
      {messages.length > 0 && (
        <>
          {messages.map((each) => {
            return (
              <div className="messageList">
                <p>{each.message}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
export default IndividualChat;
