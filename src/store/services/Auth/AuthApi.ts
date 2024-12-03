import axiosInstance from "@/apiConfigs/axiosInstance";
import { ERROR_TOASTER, REQUIRED_TOASTER } from "@/lib/toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadUser = createAsyncThunk(
  "loadUser",
  async ({ setAuthFail }: { setAuthFail: any }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/current-user`);

      return res.data;
    } catch (error: any) {
      setAuthFail(true);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const userSignIn = createAsyncThunk(
  "userSignIn",
  async (data: { data: any }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`/login`, data);

      return res.data;
    } catch (error: any) {
      ERROR_TOASTER(error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const changePassword = createAsyncThunk(
  "changePassword",
  async (data: { data: any }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(`/update-password`, data);
      REQUIRED_TOASTER(res.data);
      return res.data;
    } catch (error: any) {
      ERROR_TOASTER(error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUsername = createAsyncThunk(
  "updateUsername",
  async (
    { userId, data }: { userId: number; data: any },
    { rejectWithValue }
  ) => {
    try {
      const res = await axiosInstance.post(`/update-user/${userId}`, data);

      REQUIRED_TOASTER(res.data);
      return res.data;
    } catch (error: any) {
      ERROR_TOASTER(error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "logoutUser",
  async (undefined, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(`/logout`);
      return res.data;
    } catch (error: any) {
      ERROR_TOASTER(error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const forgetPassword = createAsyncThunk(
  "forgetPassword",
  async (
    { data }: { data: any; isTenant: boolean; tenant: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await axiosInstance.post(`/password/email`, data);

      // toast.success(res.data.message);
      return res.data;
    } catch (error: any) {
      ERROR_TOASTER(error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const validateToken = createAsyncThunk(
  "validateToken",
  async ({ data, fun }: { data: any; fun: any }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`/token/verify`, data);
      return res.data;
    } catch (error: any) {
      fun(true);

      ERROR_TOASTER(error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const resetPassword = createAsyncThunk(
  "resetPassword",
  async (data: { data: any }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`/password/reset`, data);
      // toast.success(res.data.message);
      return res.data;
    } catch (error: any) {
      ERROR_TOASTER(error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
