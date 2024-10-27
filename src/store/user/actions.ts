import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "./types";
// import axios from "axios";

export const signUp = createAsyncThunk<User, {email: string, username: string, password: string}>(
    'signUp',
    async ({email, username, password}) => {
        try {
            const data = {email, username, password, store: '', gmailConnected: false, done: false}
            const res = await new Promise<User>((resolve) => {
                setTimeout(() => {
                    resolve(data);
                }, 100);
            });
            return res;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
);
export const connectStore = createAsyncThunk<{store: string}, {store: string}>(
    'connect store',
    async ({store}) => {
        try {
            const data = {store: store};
            const res = await new Promise<{store: string}>((resolve) => {
                setTimeout(() => {
                    resolve(data);
                }, 100);
            });
            return res;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
);