import { Message, ChatInput } from "./../../components";
import { EllipsisOutlined } from "@ant-design/icons";

const ChatBar = () => {
  return (
    <div className="message-bar">
      <div className="message-bar-header">
        <div />
        <div className="message-bar-header-fullName">
          <b>Вася Пупсик</b>
          <span>online</span>
        </div>
        <div>
          <EllipsisOutlined className="message-bar-header-icon" />
        </div>
      </div>
      <div className="message-bar-chat">
        <Message typing />
        <Message isMe checked text="loremlorem loremlorem" time="12:09:50" />
        <Message
          time={"20:00"}
          audio="https://notificationsounds.com/storage/sounds/file-sounds-1159-promise.mp3"
        />
        <Message
          isMe
          time={"20:00"}
          audio="https://notificationsounds.com/storage/sounds/file-sounds-1152-swinging.mp3"
        />
        <Message text="loremlorem loremlorem" time="12:09:50" />
        <Message
          text="dldslfsfl dldslfsfl dldslfsfl dldslfsfl dldslfsfl dldslfsfl "
          time="28:12:91"
          attachments={[
            {
              fileName: "image",
              imgUrl:
                "https://source.unsplash.com/user/erondu/100x100?random=1",
            },
          ]}
        />
        <Message
          isMe
          checked
          text="lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem
  lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loreml "
          time="12:09:50"
        />
        <Message
          attachments={[
            {
              fileName: "image",
              imgUrl:
                "https://source.unsplash.com/user/erondu/100x100?random=1",
            },
            {
              fileName: "image",
              imgUrl:
                "https://source.unsplash.com/user/erondu/100x100?random=2",
            },
            {
              fileName: "image",
              imgUrl:
                "https://source.unsplash.com/user/erondu/100x100?random=3",
            },
            {
              fileName: "image",
              imgUrl:
                "https://source.unsplash.com/user/erondu/100x100?random=4",
            },
            {
              fileName: "image",
              imgUrl:
                "https://source.unsplash.com/user/erondu/100x100?random=5",
            },
            {
              fileName: "image",
              imgUrl:
                "https://source.unsplash.com/user/erondu/100x100?random=6",
            },
          ]}
          checked
          text="lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem
      lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem
      lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem
      lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem
      lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremv
      lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem
      lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem"
          time="12:09:55"
        />
        <Message
          attachments={[
            {
              fileName: "image",
              imgUrl:
                "https://source.unsplash.com/user/erondu/100x100?random=1",
            },
          ]}
          isMe
          text="lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem
    lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loreml "
          time="12:09:50"
        />
        <Message
          isMe
          checked
          text="lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem
  lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loreml "
          time="12:09:50"
        />
        <Message
          checked
          text="lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem
    lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem
    lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem
    lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem
    lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremv
    lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem
    lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem"
          time="12:09:55"
        />
        <Message
          isMe
          text="lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem
  lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loreml "
          time="12:09:5000"
        />
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatBar;
