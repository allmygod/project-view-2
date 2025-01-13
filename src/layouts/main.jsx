import React, { useContext, useMemo } from "react";
import styled from "@emotion/styled";
import { ProjectContext } from "../contexts/ProjectContext.jsx";
import { Link } from "react-router-dom";

const HeaderText = styled.h3`
  margin-left: 0.5rem;
`;

export default function MainLayout() {
  const { projects, favorites } = useContext(ProjectContext);
  const favoriteProjects = useMemo(
    () => projects.filter(({ projectId }) => favorites.includes(projectId)),
    [projects, favorites]
  );

  return (
    <>
      <HeaderText>Favorite Projects</HeaderText>
      <ul>
        {favoriteProjects.map(({ projectId, projectName }) => (
          <li key={projectId}>
            <Link to={`/projects/${projectId}`}>{projectName}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
