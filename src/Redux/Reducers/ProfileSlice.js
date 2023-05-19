import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from "react-redux";



const initialState = {
  error: null,
  loading: false,
  DataUser: {},
  email: "",
};

export const fetchUserData = createAsyncThunk("profile/fetchUserData", async (body) => {
  const token = await AsyncStorage.getItem("accessToken")
  const response = await fetch("http://10.0.2.2:8080/api/v1/user", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    // عشان انت هنا لازم تضيف الـ accessToken
    body: JSON.stringify(body),
  });

  return await response.json();

});

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, { payload }) => {
        if (payload.error) {
          console.log(payload, "", state.error);
          state.loading = false;
          console.log("Error in data from back");
          if (payload.email) {
            AsyncStorage.setItem('email', payload.email);
          }
        } else {
          state.loading = false;
          console.log(payload);
          console.log("END OF PAYLOAD")
          state.DataUser = {
            ...payload
          };
          console.log(state.DataUser)
          //لو جيت اطبعها مش هتطبع  DataUser عمر بقولك طب مش انا دلوقتي المفروض اننا واخدج الداتا دي خزنها ف 
          //  هنا الايرور انا كنت بعمل اسينيك للداتا بحيث انه يخزنها ليس الا
          AsyncStorage.setItem("DataUser", JSON.stringify(state.DataUser));
        }
      }
      )

      .addCase(fetchUserData.rejected, (state, { error }) => {
        state.loading = false;
        state.DataUser = {};
        state.error = error.message;
      });
  },
});

export default profileSlice.reducer;
