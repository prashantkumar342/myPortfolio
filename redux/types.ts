// types.ts
export interface User {
  id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  // Add other properties
}

export interface GlobalVarState {
  user: User;
  // Add other properties of globalVar
}

export interface GlobalState {
  globalVar: GlobalVarState;
  // Add other slices of your state if there are more
}
