import { LoginRequest, LoginResponse, User } from '@/types/auth';
import { TaskView, TaskUpdateStatusDto, TaskCreateDto, SubmissionView } from '@/types/task';

const API_BASE_URL = 'http://localhost:8080/api';

class ApiError extends Error {
  constructor(message: string, public status: number) {
    super(message);
    this.name = 'ApiError';
  }
}

const getAuthToken = () => localStorage.getItem('token');

const apiRequest = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
  const token = getAuthToken();
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(errorData.error || 'An error occurred', response.status);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      if (error.status === 401) {
        localStorage.removeItem('token');
      }
      throw error;
    }
    throw new ApiError('Network error', 0);
  }
};

export const authApi = {
  login: async (email: string, password: string): Promise<{ token: string }> => {
    return apiRequest<{ token: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  getCurrentUser: async (): Promise<User> => {
    return apiRequest<User>('/auth/me');
  },
};

export const taskApi = {
  getTasks: async (status?: string): Promise<TaskView[]> => {
    const query = status ? `?status=${status}` : '';
    return apiRequest<TaskView[]>(`/tasks${query}`);
  },

  getTask: async (id: number): Promise<TaskView> => {
    return apiRequest<TaskView>(`/tasks/${id}`);
  },

  // ✅ FIXED: Returns Task entity (not TaskView) from your PUT endpoint
  updateTaskStatus: async (id: number, status: string): Promise<any> => {
    return apiRequest<any>(`/tasks/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  },

  startTask: async (id: number): Promise<TaskView> => {
    return apiRequest<TaskView>(`/tasks/${id}/start`, {
      method: 'PATCH',
    });
  },

  // ✅ FIXED: Backend expects { summary: string, links: string[] }
  submitTask: async (id: number, summary: string, links: string[]): Promise<TaskView> => {
    return apiRequest<TaskView>(`/tasks/${id}/submit`, {
      method: 'POST',
      body: JSON.stringify({ summary, links }),
    });
  },

  // ✅ FIXED: Backend expects { decision: "APPROVED"|"REJECTED", note?: string }
  reviewTask: async (id: number, decision: 'APPROVED' | 'REJECTED', note?: string): Promise<SubmissionView> => {
    return apiRequest(`/tasks/${id}/review`, {
      method: 'POST',
      body: JSON.stringify({ decision, note }),
    });
  },

  getSubmissionHistory: async (id: number): Promise<SubmissionView[]> => {
    return apiRequest<SubmissionView[]>(`/tasks/${id}/submissions`);
  },

  // ✅ NEW: Added missing HOD task creation
  createTask: async (taskData: TaskCreateDto): Promise<TaskView> => {
    return apiRequest<TaskView>('/tasks', {
      method: 'POST',
      body: JSON.stringify(taskData),
    });
  },

  // ✅ NEW: Added tasks by user endpoint
  getTasksByUser: async (userId: number, status?: string): Promise<TaskView[]> => {
    const query = status ? `?status=${status}` : '';
    return apiRequest<TaskView[]>(`/tasks/by-user/${userId}${query}`);
  },
};

export { ApiError };
