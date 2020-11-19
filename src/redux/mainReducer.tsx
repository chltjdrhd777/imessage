import user, { UserState } from "./Slices/userSlice";
import appInfo from "./Slices/appSlice";
import { AppState } from "./Slices/appSlice";

export const mainReducer = {
  user: user.reducer,
  app: appInfo.reducer,
};

export interface CombinedReducerState {
  user: UserState;
  app: AppState;
}

export const selectUser = (state: CombinedReducerState) => {
  return state.user;
};

export const selectApp = (state: CombinedReducerState) => {
  return state.app;
};
