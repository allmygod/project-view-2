import React, { useContext, useMemo } from "react";
import styled from "@emotion/styled";
import { ProjectContext } from "../contexts/ProjectContext.jsx";

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
        {favoriteProjects.map(({ key, projectId, projectName }) => (
          <li key={key}>
            <a href={`/projects/${projectId}`}>{projectName}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
