import { useState } from "react";
import ChatList from "./ChatList";
import IndividualChat from "./IndividualChat";

const Home = () => {
  const [messageList, setMessageList] = useState(null);

  return (
    <div className="chatApp">
      <div className="chat">
        <ChatList messageList={messageList} setMessageList={setMessageList} />
        <IndividualChat messages={messageList} />
      </div>
    </div>
  );
};
export default Home;
