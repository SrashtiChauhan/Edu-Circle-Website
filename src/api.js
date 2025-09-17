export const API_BASE =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// Generic POST helper
export async function apiPost(path, data, isFormData = false) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: isFormData ? {} : { "Content-Type": "application/json" },
    body: isFormData ? data : JSON.stringify(data),
  });
  return res.json();
}

// Generic GET helper
export async function apiGet(path) {
  const res = await fetch(`${API_BASE}${path}`);
  return res.json();
}

// Generic DELETE helper
export async function apiDelete(path, data = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Auth
export async function register(username, password) {
  return apiPost("/register", { username, password });
}

export async function login(username, password) {
  return apiPost("/login", { username, password });
}

// Groups
export async function createGroup(user_id, name, description) {
  return apiPost("/groups/create", { user_id, name, description });
}

export async function joinGroup(user_id, group_code) {
  return apiPost("/groups/join", { user_id, group_code });
}

// Notes / Files
export async function uploadNote(groupCode, formData) {
  const res = await fetch(`${API_BASE}/groups/${groupCode}/notes/upload`, {
    method: "POST",
    body: formData,
  });
  return res.json();
}
