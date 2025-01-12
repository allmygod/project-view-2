import React, { createContext, useEffect, useState } from "react";
import { Row, Col } from "antd";
import styled from "@emotion/styled";
import { fetchProjects } from "../lib/mockApi.js";
import MainLayout from "../layouts/main.jsx";

const ErrorMsg = styled.h2`
  text-align: center;
`;

const CustomCol = styled(Col)`
  margin-top: 4rem;
  justify-content: center;
`;

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [favorites, setFavorites] = useState(["project_a", "project_c"]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects()
      .then((initialData) => setProjects(initialData))
      .catch((err) => setError(err));
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        setProjects,
        favorites,
        setFavorites,
        error,
        setError,
      }}
    >
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <Row>
        <CustomCol span={4}>
          <MainLayout />
        </CustomCol>
        <CustomCol span={20}>{children}</CustomCol>
      </Row>
    </ProjectContext.Provider>
  );
};
