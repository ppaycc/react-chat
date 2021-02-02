import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { useState } from "react";

import "./style.scss";

const ChatInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className="chat-input">
      <SmileOutlined className="chat-input-icon" />

      <Input.TextArea
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type here..."
        autoSize={{ minRows: 1, maxRows: 6 }}
      />
      <CameraOutlined className="chat-input-icon" />

      {value ? (
        <MailOutlined className="chat-input-icon" />
      ) : (
        <AudioOutlined className="chat-input-icon" />
      )}
    </div>
  );
};

export default ChatInput;
