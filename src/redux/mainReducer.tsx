import user, { UserState } from "./Slices/userSlice";

export const mainReducer = {
  user: user.reducer,
};

export interface CombinedReducerState {
  user: UserState;
}

export const selectUser = (state: CombinedReducerState) => {
  return state.user;
};
