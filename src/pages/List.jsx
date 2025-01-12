import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Table } from "antd";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import { ProjectContext } from "../contexts/ProjectContext.jsx";

const CreateButton = styled(Button)`
  float: right;
  padding: 0 2rem;
  margin-bottom: 1rem;
`;

export default function List() {
  const navigate = useNavigate();
  const { projects } = useContext(ProjectContext);
  const columns = [
    {
      title: "Project ID",
      dataIndex: "projectId",
      key: "projectId",
      render: (projectId) => (
        <Link to={`/projects/${projectId}`}>{projectId}</Link>
      ),
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      render: (date) => dayjs(date).format("YYYY-MM-DD"),
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      render: (date) => dayjs(date).format("YYYY-MM-DD"),
    },
    {
      title: "Project Manager",
      dataIndex: "projectManager",
      key: "projectManager",
    },
    {
      title: "",
      key: "action",
      render: (_, { projectId }) => (
        <Button
          type="primary"
          onClick={() => navigate(`/projects/${projectId}/edit`)}
        >
          Edit
        </Button>
      ),
    },
  ];

  return (
    <>
      <CreateButton
        type="primary"
        size="large"
        onClick={() => navigate("/projects/new")}
      >
        Create Project
      </CreateButton>
      <Table
        columns={columns}
        dataSource={projects}
        pagination={false}
        bordered
      />
    </>
  );
}
