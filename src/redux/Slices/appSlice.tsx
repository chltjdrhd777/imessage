import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DefaultChatList {
  timestamp: string;
  firstMessage: string;
}

export interface AppState {
  addUserToggle: boolean;
  sideBarInput: string;
  chatInfo: {
    chatId?: string;
    chatName?: string;
  };
  defaultChatList: any[];
}

//? reducer collection
const appInfo = createSlice({
  name: "app",
  initialState: {
    addUserToggle: false,
    sideBarInput: "",
    chatInfo: { chatId: undefined, chatName: undefined },
    defaultChatList: [],
  } as AppState,

  reducers: {
    addUserToggleAction: (state) => {
      state.addUserToggle = !state.addUserToggle;
    },

    sideBarInput: (state, action: PayloadAction<string>) => {
      state.sideBarInput = action.payload;
    },

    setChat: (state, action: PayloadAction<AppState["chatInfo"]>) => {
      state.chatInfo = action.payload;
    },

    setDefaultChat: (state, action: PayloadAction<any[]>) => {
      state.defaultChatList.push(action.payload);
    },
  },
});

export default appInfo;

export const {
  addUserToggleAction,
  sideBarInput,
  setChat,
  setDefaultChat,
} = appInfo.actions;
