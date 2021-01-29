import { Dialog, Message } from "../../components";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="dialogs-bar">
        <Dialog text="dolor" fullName="ВасяПуп" time="12:30 pm" isMe checked />

        <Dialog
          text="lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor"
          fullName="ВасяПупкинВасяПупкинВасяПупкинВасяПупкин ВасяПуп ВасяПуп ВасяПуп ВасяПупВасяПуп"
          time="12:30 pm"
          isMe
          checked
        />
        <Dialog
          text="lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor"
          fullName="ВасяПупкинВасяПупкинВасяПупкинВасяПупкин ВасяПуп ВасяПуп ВасяПуп ВасяПупВасяПуп"
          time="12:30 pm"
          isMe
          checked
        />
        <Dialog
          text="lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor"
          fullName="ВасяПупкинВасяПупкинВасяПупкинВасяПупкин ВасяПуп ВасяПуп ВасяПуп ВасяПупВасяПуп"
          time="12:30 pm"
          isMe
          checked
        />
        <Dialog
          text="lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor"
          fullName="ВасяПупкинВасяПупкинВасяПупкинВасяПупкин ВасяПуп ВасяПуп ВасяПуп ВасяПупВасяПуп"
          time="12:30 pm"
          isMe
          checked
        />
        <Dialog
          text="lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor"
          fullName="Вася Пупкин fullName"
          count={100}
          time="12:30"
        />
        <Dialog
          text="loremipsumdolorloremipsumdolorloremipsumdolorloremipsumdolor"
          fullName="Вася Пупкин"
          time="12:30"
        />
        <Dialog
          text="loremipsumdolorloremipsumdolorloremipsumdolorloremipsumdolor"
          fullName="Вася Пупкин"
          time="12:30"
          count={1}
          online
        />
      </div>
      <div className="message-bar">
        <Message typing />
        <Message isMe checked text="loremlorem loremlorem" time="12:09:50" />
        <Message text="loremlorem loremlorem" time="12:09:50" />
        <Message
          text="dldslfsfl dldslfsfl dldslfsfl dldslfsfl dldslfsfl dldslfsfl "
          time="28:12:91"
          attachments={[
            {
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
              imgUrl:
                "https://source.unsplash.com/user/erondu/100x100?random=1",
            },
            {
              imgUrl:
                "https://source.unsplash.com/user/erondu/100x100?random=2",
            },
            {
              imgUrl:
                "https://source.unsplash.com/user/erondu/100x100?random=3",
            },
            {
              imgUrl:
                "https://source.unsplash.com/user/erondu/100x100?random=4",
            },
            {
              imgUrl:
                "https://source.unsplash.com/user/erondu/100x100?random=5",
            },
            {
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
    </div>
  );
};

export default Home;
