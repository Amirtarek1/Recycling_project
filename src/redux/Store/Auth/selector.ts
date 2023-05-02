import { RootState } from "../../store";

export const selectloading = (state : RootState)=> {state.auth.loading}
export const selectaccessToken = (state : RootState)=> {state.auth.accessToken}