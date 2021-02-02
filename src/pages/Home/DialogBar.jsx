import { orderBy } from "lodash";
import { Dialog } from "../../components";
import { TeamOutlined, FormOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Empty } from "antd";
import { useState } from "react";

const DialorBar = ({ items }) => {
  const [value, setValue] = useState("");

  const resultPeople = orderBy(items, ["created_at"], ["desc"])
    .filter((el) => el.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0)
    .map((el) => {
      return <Dialog {...el} />;
    });

  return (
    <div className="dialogs-bar">
      <div className="dialogs-bar-header">
        <div>
          <TeamOutlined className="dialogs-bar-icon" />
          <span>Список диалогов</span>
        </div>
        <FormOutlined className="dialogs-bar-icon" />
      </div>
      <div className="dialogs-bar-search">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Поиск среди контактов"
          suffix={<SearchOutlined className="dialogs-bar-icon-search" />}
        />
      </div>
      <div className="dialogs-bar-items">
        {resultPeople.length ? (
          resultPeople
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </div>
    </div>
  );
};

export default DialorBar;
