import "./style.scss";
import { format, isToday } from "date-fns";

const Dialog = ({
  text,
  fullName,
  count,
  created_at,
  isMe,
  checked,
  online,
}) => {
  const getCorrectTime = (created_at) => {
    if (isToday(created_at)) {
      return format(created_at, "HH:mm");
    } else {
      return format(created_at, "dd.MM.yyyy");
    }
  };

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
          <span>{getCorrectTime(created_at)}</span>
        </div>
        <div className="dialog__content-text">
          <p>{isMe ? "Вы: " + text : text}</p>
          {count && !isMe && <span>{count > 99 ? "99+" : count}</span>}
          {isMe && (
            <i className="tiny material-icons">
              {checked ? "done_all" : "done"}
            </i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
