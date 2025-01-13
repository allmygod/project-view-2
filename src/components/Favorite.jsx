import React, { useContext } from "react";
import { BsFillBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import { ProjectContext } from "../contexts/ProjectContext.jsx";

export default function Favorite({ projectId }) {
  const { favorites, setFavorites } = useContext(ProjectContext);
  return favorites.includes(projectId) ? (
    <BsFillBookmarkStarFill
      size={32}
      fill="#d9363e"
      onClick={() =>
        setFavorites(favorites.filter((favorite) => favorite !== projectId))
      }
    />
  ) : (
    <BsBookmarkStar
      size={32}
      onClick={() => setFavorites([...favorites, projectId])}
    />
  );
}
