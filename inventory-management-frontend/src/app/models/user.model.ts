export interface User {
    id?: string;
    email: string;
    role: 'Administrator' | 'Employee';
    token?: string;
  }
  
  export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface RegisterRequest {
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
  }
  
  