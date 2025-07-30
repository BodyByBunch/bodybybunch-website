import { apiClient } from './client';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  role?: string;
}

/**
 * Example API functions - replace with your actual API endpoints
 */
export async function fetchUsers(): Promise<User[]> {
  return apiClient.get<User[]>('/users');
}

export async function fetchUser(id: string): Promise<User> {
  return apiClient.get<User>(`/users/${id}`);
}

export async function createUser(userData: CreateUserRequest): Promise<User> {
  return apiClient.post<User>('/users', userData);
}

export async function updateUser(id: string, userData: Partial<CreateUserRequest>): Promise<User> {
  return apiClient.put<User>(`/users/${id}`, userData);
}

export async function deleteUser(id: string): Promise<void> {
  return apiClient.delete<void>(`/users/${id}`);
} 