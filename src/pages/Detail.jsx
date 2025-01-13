import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Typography } from "antd";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import { ProjectContext } from "../contexts/ProjectContext.jsx";
import { formItemLayout } from "../constants/index.js";

const CustomButton = styled(Button)`
  padding: 0 2rem;
`;

export default function Detail() {
  const navigate = useNavigate();
  const { projectId: pId } = useParams();
  const { projects } = useContext(ProjectContext);
  const [form] = Form.useForm();
  const selected = projects.find(({ projectId }) => projectId === pId);

  return (
    <Form {...formItemLayout} form={form}>
      <Form.Item label="Project ID">
        <Typography>{selected.projectId}</Typography>
      </Form.Item>
      <Form.Item label="Project Name">
        <Typography>{selected.projectName}</Typography>
      </Form.Item>
      <Form.Item label="Description">
        <Typography>{selected.description}</Typography>
      </Form.Item>
      <Form.Item label="Start Date">
        <Typography>
          {dayjs(selected.startDate).format("YYYY-MM-DD")}
        </Typography>
      </Form.Item>
      <Form.Item label="End Date">
        <Typography>{dayjs(selected.endDate).format("YYYY-MM-DD")}</Typography>
      </Form.Item>
      <Form.Item label="Project Manager">
        <Typography>{selected.projectManager}</Typography>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <CustomButton
          type="primary"
          htmlType="button"
          style={{ marginRight: "1rem" }}
          onClick={() => navigate("/projects")}
        >
          Back
        </CustomButton>
        <CustomButton
          type="primary"
          htmlType="button"
          onClick={() => navigate(`/projects/${selected.projectId}/edit`)}
        >
          Edit
        </CustomButton>
      </Form.Item>
    </Form>
  );
}
