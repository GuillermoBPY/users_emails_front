import { apiSlice } from "../../app/api/apiSlice";

export const homeApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllUsers: builder.query({
            query: () => '/users'
        }),
    })
})

export const { useGetAllUsersQuery } = homeApiSlice;
