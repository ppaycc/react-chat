import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { MessageAudio } from "..";
import "./style.scss";

const Message = ({ text, time, isMe, checked, attachments, audio, typing }) => {
  // const [playStatus, setPlayStatus] = useState(false);
  // const [duration, setDuration] = useState(0);
  // const [currentTime, setCurrentTime] = useState(0);
  // const audioRef = useRef(null);
  // const togglePlay = () => {
  //   // console.log(audioRef.current.duration);
  //   // setPlayStatus(!playStatus);
  //   // audioRef.current.play();
  //   // console.log(allTime);
  //   if (!playStatus) {
  //     audioRef.current.play();
  //   } else {
  //     audioRef.current.pause();
  //   }
  // };
  // useEffect(() => {
  //   if (audioRef.current) {
  //     // console.log(audioRef.current.duration);
  //     audioRef.current.addEventListener("playing", () => {
  //       setPlayStatus(true);
  //     });
  //     audioRef.current.addEventListener("ended", () => {
  //       setPlayStatus(false);
  //       setDuration(0);
  //       setCurrentTime(0);
  //     });
  //     audioRef.current.addEventListener("pause", () => {
  //       setPlayStatus(false);
  //     });
  //     audioRef.current.addEventListener("timeupdate", () => {
  //       // console.log(audioRef.current.currentTime);
  //       // console.log(audioRef.current.duration);
  //       // setDuration(audioRef.current.currentTime);
  //       // console.log("%", duration, allTime);
  //       setCurrentTime(audioRef.current.currentTime);
  //       setDuration(
  //         (audioRef.current.duration / 100) * audioRef.current.currentTime * 100
  //       );
  //     });
  //   }
  // }, []);

  return (
    <div
      className={classNames("message", {
        message__isntMe: !isMe,
        message__isMe: isMe,
        message__typing: typing,
        message__audio: audio,
        message__oneAttachments: attachments && attachments.length === 1,
      })}
    >
      <div className="message__content">
        {attachments && (
          <div className="message__attachments">
            {attachments.map((item) => {
              return (
                <div
                  key={`${item.imgUrl}`}
                  className="message__attachments-item"
                >
                  <img src={item.imgUrl} alt={`${item.name}`} />
                </div>
              );
            })}
          </div>
        )}

        <span className="message__body">
          {text}
          {typing && "typing..."}
          {audio && <MessageAudio audio={audio} />}
          <span className="message__time_shadow">
            {time}
            {isMe && <i className="tiny material-icons">done</i>}
          </span>
          <span className="message__time_real">
            {isMe && (
              <i className="tiny material-icons">
                {checked ? "done_all" : "done"}
              </i>
            )}
            {time}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Message;
