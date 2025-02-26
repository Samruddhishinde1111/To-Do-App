import React from "react";
import { List } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const TodoItem = ({ task, index, deleteTask }) => {
  return (
    <List.Item
      actions={[<DeleteOutlined onClick={() => deleteTask(index)} style={{ color: "red", cursor: "pointer" }} />]}
    >
      {task}
    </List.Item>
  );
};

export default TodoItem;