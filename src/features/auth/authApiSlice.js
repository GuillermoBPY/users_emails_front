import { apiSlice } from '../../app/api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/users/login',
                method: 'POST',
                body: { ...credentials }
            }),
            transformErrorResponse: (response) => {
                if (response?.status === 401) {
                    return { ...response, notification: "Invalid credentials" }
                } else if (response?.originalStatus === 404) {
                    return { ...response, notification: "This feature has not been created yet!" }
                } return response;
            }
        }),
        codeVerify: builder.query({
            query: code => `/users/verify/${code}`,
            transformErrorResponse: response => ({
                response, notification: "Code not found"
            }),
        }),
        createUser: builder.mutation({
            query: user => ({
                url: '/users',
                method: 'POST',
                body: user
            }),
            transformResponse: response => ({
                ...response,
                notification: `An email was sent to ${response.email} with the 
                                instructions to finish creating your account`
            }),
            transformErrorResponse: response => {
                if (response?.data.message === "llave duplicada viola restricción de unicidad «users_email_key»") {
                    return { response, notification: "Email already exists!" }
                } else return response;
            }
        }),
        passwordVerifyEmail: builder.mutation({
            query: email => ({
                url: '/users/reset_password',
                method: 'POST',
                body: email
            }),
            transformErrorResponse: response => {
                if (response.status === 401)
                    return {
                        ...response,
                        notification: "User not found"
                    }
                return response
            },
            transformResponse: response => ({
                ...response,
                notification: `An email was sent to ${response.email} with the 
                                instructions to finish changing your password`
            }),
        }),
        passwordVerifyCode: builder.query({
            query: code => `/password_verify/${code}`,
            transformErrorResponse: res => ({
                ...res, notification: "Code not found"
            }),
            transformResponse: res => ({
                ...res, notification: "Email verified!"
            })
        }),
        changePassword: builder.mutation({
            query: ({password, code}) => {
                console.log(password, code);
                return {
                    url: `/users/reset_password/${code}`,
                    method: 'POST',
                    body: {password}
                }
            },
            // query: (password, code) => ({
            //     url: `/users/reset_password/${code}`,
            //     method: 'POST',
            //     body: password
            // }),
            transformResponse: res => ({
                ...res,
                notification: "Password changed! Login with your new password"
            })
        })
    })
})

export const {
    useLoginMutation,
    useCodeVerifyQuery,
    useCreateUserMutation,
    usePasswordVerifyEmailMutation,
    useLazyPasswordVerifyCodeQuery,
    useChangePasswordMutation
} = authApiSlice

export const selectLoginResult = authApiSlice.endpoints.login.select();
