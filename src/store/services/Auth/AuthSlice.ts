import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  loading: {},

  req_success: {},
  avatar_loading: false,
  forget_password_loading: false,
  reset_password_loading: "null",
  token_loading: false,
  logout_loading: false,
  loaduser_loading: false,
  update_user_loading: false,
  load_user_success: false,
  logout_success: false,
  pass_req_success: false,
  default_pass_req_success: false,
  token_success: false,
  forget_password_success: false,
  reset_password_success: false,
  update_user_req_success: false,
  email_validated: false,
  recent_signup_email: null,
  authenticated: false,
  load_user: null,
  tac_user: null,
  access_token: null,
  login_fail: false,
  member_verify_token_loading: false,
  member_verify_token_success: false,
  member_signup_success: false,
  member_signup_loading: false,
  tenant: "",
  tenant_pay_details: {},
  theme_name: "",
};

const AuthSlice = createSlice({
  name: "userSignUp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// export const {} = AuthSlice.actions;

export default AuthSlice.reducer;
