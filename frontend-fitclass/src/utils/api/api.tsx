import { getToken } from "./auth";

const BASE_URL = "http://localhost:8080";

export async function apiFetch<T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...(options.headers || {}),
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
  method: options.method,
  headers,
  body: options.body,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Erro na requisição");
  }

  return response.json() as Promise<T>;
}
