export interface RegisterUser {
  firstName: string;
  lastName: string;
  loginUser: LoginUser;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface AuthUserResponse {
  accessToken: string;
}
