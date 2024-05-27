import { useEffect, useState } from "react";
import { apiEndpoint } from "../constants/constants";
import ChatItem from "./ChatItem";

const ChatList = ({ messageList, setMessageList }) => {
  // local state for holding data
  const [data, setData] = useState(null);
  // local state to store filter term
  const [filterTerm, setFilterTerm] = useState("");

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

  const filterResults = (e) => {
    const filterTerm = e.target.value;

    setFilterTerm(filterTerm);
    const filteredData = data.filter((each) => {
      return (
        each.title.toLowerCase().indexOf(filterTerm.toLowerCase()) !== -1 ||
        each.orderId.toLowerCase().indexOf(filterTerm.toLowerCase()) !== -1
      );
    });
    if (filterTerm === "") {
      setData(data);
    } else {
      setData(filteredData);
    }
  };

  console.log(data);

  return (
    <div className="chatListBlock">
      <div className="filterList">
        <input
          type="text"
          placeholder="search by title"
          value={filterTerm}
          // onChange={(e) => {
          //   console.log(e.target.value);
          //   setFilterTerm(e.target.value);
          //   filterResults();
          // }}
          onChange={filterResults}
        />
      </div>
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
    </div>
  );
};
export default ChatList;
