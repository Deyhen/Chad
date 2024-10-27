

export interface UserState {
  data: User;
}
export interface User {
  username: string;
  password: string;
  email: string;
  store: string;
  gmailConnected: boolean,
  done: boolean
}

