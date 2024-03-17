import { apiSlice } from "./apiSlice";
import { useSelector } from "react-redux"; // Importing useSelector to access Redux store state
const USERS_URL = "https://project-x-backend-lbglg.ondigitalocean.app/api/v1";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/signup`,
        method: "POST",
        body: data,
      }),
    }),

    createProfile: builder.mutation({
      query: ({ data, access }) => ({
        url: `${USERS_URL}/profile`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `JWT ${access}`,
          // "Content-Type": "multipart/form-data",
        },
      }),
      onQueryStarted: async (mutation, { dispatch, getState }) => {
        const state = getState();
        const access = state.auth.userInfo.access;

        // If token exists, add it to the headers
        if (access) {
          mutation.headers.set("Authorization", `JWT ${access}`);
        }
      },
    }),

    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useSignupMutation,
  useCreateProfileMutation,
  useUpdateUserMutation,
} = userApiSlice;
