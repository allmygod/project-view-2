import dayjs from "dayjs";

export const fetchProjects = async (debug = false) => {
  if (debug) {
    return Promise.reject('Fetching projects failed');
  }
  return Promise.resolve([
    {
      key: "1",
      projectId: "project_a",
      projectName: "Project A",
      startDate: dayjs("2025-01-01"),
      endDate: dayjs("2025-12-31"),
      projectManager: "John Doe",
    },
    {
      key: "2",
      projectId: "project_b",
      projectName: "Project B",
      startDate: dayjs("2025-01-01"),
      endDate: dayjs("2025-12-31"),
      projectManager: "John Doe",
    },
    {
      key: "3",
      projectId: "project_c",
      projectName: "Project C",
      startDate: dayjs("2025-01-01"),
      endDate: dayjs("2025-12-31"),
      projectManager: "John Doe",
    },
    {
      key: "4",
      projectId: "project_d",
      projectName: "Project D",
      startDate: dayjs("2025-01-01"),
      endDate: dayjs("2025-12-31"),
      projectManager: "John Doe",
    },
    {
      key: "5",
      projectId: "project_e",
      projectName: "Project E",
      startDate: dayjs("2025-01-01"),
      endDate: dayjs("2025-12-31"),
      projectManager: "John Doe",
    },
  ]);
};