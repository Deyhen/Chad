
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User, UserState } from './types';
import { connectStore, signUp } from './actions';


const initialUser: User = {
  username: '',
  email: '',
  password: '',
  store: '',
  gmailConnected: false,
  done: false
};
const initialState: UserState = {
  data: initialUser,

};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    connectGmail(state){
      state.data.gmailConnected = true;
    },
    done(state){
      state.data.done = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action: PayloadAction<User>) => {
      state.data = action.payload
    }),
    builder.addCase(connectStore.fulfilled, (state, action: PayloadAction<{store: string}>) => {
      state.data.store = action.payload.store
    })
  }}
);
export const {
  connectGmail,
  done
} = userSlice.actions;

export const selectUserState = (state: RootState) => state.user;
export default userSlice.reducer;
