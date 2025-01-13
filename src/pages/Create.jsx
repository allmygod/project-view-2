import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, DatePicker, Input } from "antd";
import { ProjectContext } from "../contexts/ProjectContext.jsx";
import { formItemLayout } from "../constants/index.js";

export default function Create() {
  const navigate = useNavigate();
  const { setProjects } = useContext(ProjectContext);
  const [form] = Form.useForm();

  const onFinish = (newItem) => {
    setProjects((prevItems) => [...prevItems, newItem]);
    navigate("/projects");
  };

  const onFinishFailed = (errorFields) => {
    console.log(errorFields);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Project ID"
        name="projectId"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Project Name"
        name="projectName"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input.TextArea rows={5} />
      </Form.Item>
      <Form.Item
        label="Start Date"
        name="startDate"
        rules={[{ required: true }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item label="End Date" name="endDate" rules={[{ required: true }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Project Manager"
        name="projectManager"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
}
