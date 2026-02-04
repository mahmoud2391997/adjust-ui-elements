export const BASE_URL = "https://tinytales.trendline.marketing/api";

export interface ApiResponse<T> {
  status: boolean;
  status_code: number;
  data: T;
  message?: string;
}

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  mobile?: string;
  mobile_country_code?: string;
  token: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  mobile: string;
  password: string;
  password_confirmation: string;
  mobile_country_code: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export async function register(payload: RegisterPayload) {
  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("email", payload.email);
  formData.append("mobile", payload.mobile);
  formData.append("password", payload.password);
  formData.append("password_confirmation", payload.password_confirmation);
  formData.append("mobile_country_code", payload.mobile_country_code);

  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  const data = await res.json();
  if (!res.ok || data.status === false) {
    throw new Error(data.message || "Registration failed");
  }

  return data as ApiResponse<AuthUser>;
}

export async function login(payload: LoginPayload) {
  const formData = new FormData();
  formData.append("email", payload.email);
  formData.append("password", payload.password);

  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  const data = await res.json();
  if (!res.ok || data.status === false) {
    throw new Error(data.message || "Login failed");
  }

  return data as ApiResponse<AuthUser>;
}

export async function verifyEmail(code: string, token: string) {
  const formData = new FormData();
  formData.append("code", code);

  const res = await fetch(`${BASE_URL}/auth/verify-email`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const data = await res.json();
  if (!res.ok || data.status === false) {
    throw new Error(data.message || "Verification failed");
  }

  return data as ApiResponse<unknown>;
}

export async function fetchUserData(token: string) {
  const res = await fetch(`${BASE_URL}/auth/user-data`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  if (!res.ok || data.status === false) {
    throw new Error(data.message || "Failed to fetch user data");
  }

  return data as ApiResponse<AuthUser>;
}

