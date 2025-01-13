import dayjs from "dayjs";

export const fetchProjects = async ({ delay = 3 }) => {
  return new Promise((resolve, reject) => {
    const isError = Math.random() < 0.5;

    setTimeout(() => {  
      if (isError) {
        reject(new Error('Fetching projects failed'));
      } else {
        resolve({ initialData: [
          {
            key: 1,
            projectId: "project_a",
            projectName: "Project A",
            startDate: dayjs("2025-01-01"),
            endDate: dayjs("2025-12-31"),
            projectManager: "John Doe",
          },
          {
            key: 2,
            projectId: "project_b",
            projectName: "Project B",
            startDate: dayjs("2025-01-01"),
            endDate: dayjs("2025-12-31"),
            projectManager: "John Doe",
          },
          {
            key: 3,
            projectId: "project_c",
            projectName: "Project C",
            startDate: dayjs("2025-01-01"),
            endDate: dayjs("2025-12-31"),
            projectManager: "John Doe",
          },
          {
            key: 4,
            projectId: "project_d",
            projectName: "Project D",
            startDate: dayjs("2025-01-01"),
            endDate: dayjs("2025-12-31"),
            projectManager: "John Doe",
          },
          {
            key: 5,
            projectId: "project_e",
            projectName: "Project E",
            startDate: dayjs("2025-01-01"),
            endDate: dayjs("2025-12-31"),
            projectManager: "John Doe",
          },
        ]});
      }
    }, delay * 1000);
  });
};