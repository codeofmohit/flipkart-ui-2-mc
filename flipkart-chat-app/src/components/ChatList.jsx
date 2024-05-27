import { useEffect, useState } from "react";
import { apiEndpoint } from "../constants/constants";
import ChatItem from "./ChatItem";

const ChatList = ({ messageList, setMessageList }) => {
  // local state for holding data
  const [data, setData] = useState(null);

  // making api call via given api endpoin to fetch the data
  useEffect(() => {
    const fetchData = async (apiEndpoint) => {
      try {
        const res = await fetch(apiEndpoint);
        const data = await res.json();
        if (data) {
          setData(data);
        }
        return data;
      } catch (error) {
        return error;
      }
    };
    fetchData(apiEndpoint);
  }, []);

  if (!data) {
    return;
  }

  return (
    <div className="chatList">
      {data.map((each) => {
        const { title, imageURL, orderId, messageList } = each;
        return (
          <ChatItem
            key={each.id}
            setMessageList={setMessageList}
            messageListState={messageList}
            title={title}
            imageURL={imageURL}
            orderId={orderId}
            messageList={messageList}
          />
        );
      })}
    </div>
  );
};
export default ChatList;
