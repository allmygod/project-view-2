import React, { useContext, useMemo } from "react";
import styled from "@emotion/styled";
import { ProjectContext } from "../contexts/ProjectContext.jsx";

const HeaderText = styled.h3`
  margin-left: 0.5rem;
`;

export default function MainLayout() {
  const { projects, favorites } = useContext(ProjectContext);
  const favioriteProjects = useMemo(
    () =>
      projects
        .filter(({ projectId }) => favorites.includes(projectId))
        .map(({ projectName }) => projectName),
    [projects]
  );

  return (
    <>
      <HeaderText>Favorite Projects</HeaderText>
      <ul>
        {favioriteProjects.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </>
  );
}
