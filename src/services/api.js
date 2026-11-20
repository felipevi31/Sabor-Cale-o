const RAW_URL =
  import.meta.env.VITE_API_URL ||
  'https://glistening-fulfillment-production-62866012.up.railway.app';

const cleanBase = RAW_URL.replace(/\/+$/, '');
export const API_BASE_URL = cleanBase.endsWith('/api')
  ? cleanBase
  : `${cleanBase}/api`;

export async function apiFetch(path, options = {}) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const token = localStorage.getItem('auth_token');

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  };

  const response = await fetch(`${API_BASE_URL}${cleanPath}`, {
    ...options,
    headers,
  });

  const data = await response.json().catch(() => ({}));
  return { response, data };
}