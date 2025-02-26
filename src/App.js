import React, { useState, useEffect } from "react";
import { Layout, Input, Button, List, Typography, Space, message, Checkbox } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";

const { Content } = Layout;

const App = () => {
  // Load tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [input, setInput] = useState("");

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) {
      message.warning("Task cannot be empty!");
      return;
    }
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  const remainingTasks = tasks.filter(task => !task.completed).length;

  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/todo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <AppHeader />

      {/* Main Content */}
      <Content style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
        <div className="todo-container" style={{ background: "rgba(255, 255, 255, 0.9)", padding: "20px", borderRadius: "8px", width: "400px" }}>
          <Typography.Title level={2}>To-Do App</Typography.Title>
          <Space>
            <Input
              placeholder="Add a new task..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onPressEnter={addTask}
            />
            <Button type="primary" icon={<PlusOutlined />} onClick={addTask} />
          </Space>
          <List
            style={{ marginTop: "20px", width: "100%" }}
            bordered
            dataSource={tasks}
            renderItem={(task, index) => (
              <List.Item
                actions={[<DeleteOutlined onClick={() => deleteTask(index)} style={{ color: "red", cursor: "pointer" }} />]}
                style={{ textDecoration: task.completed ? "line-through" : "none", opacity: task.completed ? 0.6 : 1 }}
              >
                <Checkbox checked={task.completed} onChange={() => toggleCompletion(index)} style={{ marginRight: "10px" }} />
                {task.text}
              </List.Item>
            )}
          />
          {tasks.length > 0 && (
            <>
              <Typography.Text strong style={{ display: "block", textAlign: "center", marginTop: "10px" }}>{`Remaining Tasks: ${remainingTasks}`}</Typography.Text>
              <Button type="dashed" danger onClick={clearAllTasks} style={{ marginTop: "15px", width: "100%" }}>
                Clear All
              </Button>
            </>
          )}
        </div>
      </Content>

      {/* Footer */}
      <AppFooter />
    </Layout>
  );
};

export default App;
