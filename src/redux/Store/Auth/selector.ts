import { RootState } from "../../store";

export const selectloading = (state : RootState)=> {state.auth.loading}