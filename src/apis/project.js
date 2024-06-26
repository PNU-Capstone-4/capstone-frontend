import { instance } from ".";

export const fetchProjects = async () => {
  // 쿼리 키: ["/projects", user.login]
  const response = await instance.get("/project/");
  return response.data;
};

export const fetchProjectDetail = async (id) => {
  // 쿼리 키: ["/project", project.id]
  const response = await instance.get(`/project/${id}`);
  return response.data;
};

export const fetchFavorites = async (user_id) => {
  // 쿼리 키: ["/favorites", user.id]
  const response = await instance.get(`/project/favorite/${user_id}`);
  return response.data;
};

export const fetchProjectLogs = async (projectId) => {
  // 쿼리 키: ["/logs", modal?.props?.id],
  const response = await instance.get(`/project/${projectId}/logs`);
  return response.data;
};

export const deleteProject = async (id) => {
  const response = await instance.delete(`/project/${id}`, {
    timeout: 1000 * 30,
  });
  return response.data;
};

export const checkSubdomain = async (subdomain) => {
  const response = await instance.get(
    `/project/subdomain/check?name=${subdomain}`,
  );
  return response.data;
};

export const createProject = async (data) => {
  const response = await instance.post("/project/create", data, {
    timeout: 1000 * 60,
  });
  return response.data;
};

export const buildProject = async (id) => {
  const response = await instance.post(
    `/project/build`,
    { id },
    {
      timeout: 1000 * 10,
    },
  );
  return response.data;
};

export const deployProject = async (id) => {
  const response = await instance.post(
    `/project/deploy`,
    { id },
    {
      timeout: 1000 * 10,
    },
  );
  return response.data;
};

export const checkProjectDeployStatus = async (id) => {
  const response = await instance.get(`/project/deploy/status?buildId=${id}`);
  return response.data;
};

export const addFavorite = async ({ userId, projectId }) => {
  const response = await instance.post(`/project/favorite`, {
    userId,
    projectId,
  });
  return response.data;
};

export const removeFavorite = async ({ userId, projectId }) => {
  const response = await instance.delete(`/project/favorite`, {
    params: { userId, projectId },
  });
  return response.data;
};

export const updateProjectDescription = async ({ projectId, description }) => {
  const response = await instance.put(`/project/${projectId}/description`, {
    description,
  });
  return response.data;
};

export const updateProjectDetailedDescription = async ({
  projectId,
  detailedDescription,
}) => {
  const response = await instance.put(
    `/project/${projectId}/detailed_description`,
    { detailedDescription },
  );
  return response.data;
};
