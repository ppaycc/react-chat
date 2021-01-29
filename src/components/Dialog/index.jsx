import "./style.scss";

const Dialog = ({ text, fullName, count, time, isMe, checked, online }) => {
  return (
    <div className="dialog">
      <div className="dialog__ava">
        <img
          src="https://source.unsplash.com/user/erondu/100x100?random=10"
          alt="agagag"
        />
        {online && <span className="online"></span>}
      </div>
      <div className="dialog__content">
        <div className="dialog__content-fullname">
          <p>{fullName}</p>
          <span>{time}</span>
        </div>
        <div className="dialog__content-text">
          <p>{isMe ? "Вы: " + text : text}</p>
          {count && !isMe && <span>{count > 99 ? "99+" : count}</span>}
          {isMe && (
            <i class="tiny material-icons">{checked ? "done_all" : "done"}</i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
