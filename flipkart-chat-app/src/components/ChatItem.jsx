const ChatItem = ({
  title,
  imageURL,
  orderId,
  messageList,
  setMessageList,
  messageListState,
}) => {
  const onChatItemClick = () => {
    setMessageList(null);
    if (messageList.length > 0) {
      setMessageList(messageList);
    } else {
      setMessageList([]);
    }
  };

  return (
    <div className="chatItem" onClick={onChatItemClick}>
      <div className="left">
        <img src={imageURL} alt={title} />
      </div>
      <div className="right">
        <p>{title}</p>
        <p> Order : {orderId}</p>
      </div>
    </div>
  );
};
export default ChatItem;
