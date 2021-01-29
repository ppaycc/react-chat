import classNames from "classnames";
import { Button as AntButton } from "antd";
import "./style.scss";

const Button = (props) => {
  return (
    <AntButton
      {...props}
      className={classNames("button", props.className, {
        "button--large": props.size === "large",
      })}
    />
  );
};

export default Button;
