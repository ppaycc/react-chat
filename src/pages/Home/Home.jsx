import { DialorBar } from "../index";
import "./Home.scss";
import ChatBar from "./ChatBar";

const items = [
  {
    fullName: "1sdfowesdffffffffffffffffffffffffffffffffffffffffff",
    created_at: new Date(),
    text: "эыврапгышот",
    isMe: true,
    checked: true,
  },
  {
    fullName: "2sdfowe wfojwef",
    created_at: new Date(),
    text: "эыврапгышотывршарщы вылоарыва sdfkjhsdhf",
    isMe: true,
  },
  {
    fullName: "3sdfowe wfojwef",
    created_at: new Date(2012, 10, 20, 20),
    text: "эыврапгышотывршарщы вылоарыва sdfkjhsdhf",
    online: true,
  },
  {
    fullName: "1sdfowe",
    created_at: new Date(),
    text: "эыврапгышот",
  },
  {
    fullName: "2sdfowe wfojwef",
    created_at: new Date(),
    text: "эыврапгышотывршарщы вылоарыва sdfkjhsdhf",
  },
  {
    fullName: "3sdfowe wfojwef",
    created_at: new Date(2012, 10, 20, 20),
    text: "эыврапгышотывршарщы вылоарыва sdfkjhsdhf",
    online: true,
  },
  {
    fullName: "1sdfowe",
    created_at: new Date(),
    text: "эыврапгышот",
  },
  {
    fullName: "2sdfowe wfojwef",
    created_at: new Date(),
    text: "эыврапгышотывршарщы вылоарыва sdfkjhsdhf",
  },
  {
    fullName: "3sdfowe wfojwef",
    created_at: new Date(2012, 10, 20, 20),
    text: "эыврапгышотывршарщы вылоарыва sdfkjhsdhf",
    online: true,
  },
  {
    fullName: "1sdfowe",
    created_at: new Date(),
    text: "эыврапгышот",
  },
  {
    fullName: "2sdfowe wfojwef",
    created_at: new Date(),
    text: "эыврапгышотывршарщы вылоарыва sdfkjhsdhf",
  },
  {
    fullName: "3sdfowe wfojwef",
    created_at: new Date(2012, 10, 20, 20),
    text: "эыврапгышотывршарщы вылоарыва sdfkjhsdhf",
    online: true,
  },
  {
    fullName: "1sdfowe",
    created_at: new Date(),
    text: "эыврапгышот",
  },
  {
    fullName: "2sdfowe wfojwef",
    created_at: new Date(),
    text: "эыврапгышотывршарщы вылоарыва sdfkjhsdhf",
  },
  {
    fullName: "3sdfowe wfojwef",
    created_at: new Date(2012, 10, 20, 20),
    text: "эыврапгышотывршарщы вылоарыва sdfkjhsdhf",
    online: true,
  },
];
const Home = () => {
  return (
    <div className="home">
      <DialorBar items={items} />
      <ChatBar />
    </div>
  );
};

export default Home;
