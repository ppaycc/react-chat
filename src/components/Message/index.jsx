import classNames from "classnames";
import "./style.scss";

const Message = ({ text, time, isMe, checked, attachments, typing }) => {
  return (
    <div
      className={classNames("message", {
        message__isntMe: !isMe,
        message__isMe: isMe,
        message__typing: typing,
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
                  <img src={item.imgUrl} alt="img" />
                </div>
              );
            })}
          </div>
        )}
        <span className="message__text">
          {text}
          {typing && "typing..."}
          <span className="message__time_shadow">
            {time}
            {isMe && <i class="tiny material-icons">done</i>}
          </span>
          <span className="message__time_real">
            {isMe && (
              <i class="tiny material-icons">{checked ? "done_all" : "done"}</i>
            )}
            {time}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Message;
