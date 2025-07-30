// Re-export the main API client
export { apiClient, ApiError, type ApiOptions } from './client';

// Re-export example API functions and types
export { 
  fetchUsers,
  fetchUser,
  createUser,
  updateUser,
  deleteUser,
  type User,
  type CreateUserRequest
} from './example'; 