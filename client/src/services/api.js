const API_BASE = "/api";

const request = async (path, options = {}) => {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  let data = {};
  try {
    data = await res.json();
  } catch {
    // no JSON body
  }

  if (!res.ok) {
    throw new Error(data.message || `Request failed (${res.status})`);
  }

  return data;
};

/* ---------------- projects ---------------- */
export const getProjects = (params = "") =>
  request(`/projects${params}`).then((d) => d.data || []);

export const getProject = (id) => request(`/projects/${id}`).then((d) => d.data);

export const createProject = (payload) =>
  request("/projects", { method: "POST", body: JSON.stringify(payload) }).then((d) => d.data);

export const updateProject = (id, payload) =>
  request(`/projects/${id}`, { method: "PUT", body: JSON.stringify(payload) }).then((d) => d.data);

export const deleteProject = (id) =>
  request(`/projects/${id}`, { method: "DELETE" }).then((d) => d.data);

/* ---------------- contact ---------------- */
export const sendMessage = (payload) =>
  request("/contact", { method: "POST", body: JSON.stringify(payload) });

const api = {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  sendMessage,
};

export default api;