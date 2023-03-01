import { create } from 'apisauce';
import env from '../../../env.json'
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = create({
    baseURL: env.BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});
export const setAuthToken = async (token: string) => {

    try {
        await AsyncStorage.setItem('@accessToken', token);
        // console.log()
        api.setHeader('token', token);
    } catch (e) {
        //console.log(e)
    }
};

api.axiosInstance.interceptors.request.use(
    async (config: any) => {
        const value = await AsyncStorage.getItem('@accessToken');
        // config.headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5ODI0ZDFkOC1jZTQ4LTRmZDYtYTA1NC1kYWU3MjE5OGUzMDEiLCJqdGkiOiI4OTllZGY4NWY5YzE2YTNiZWNlZWJhNjJmMWMyZDdlMTRjNjA0ZDEzZGRhNDNkNzhkNmY4OWZjYWU0ZjRmM2QxM2YzZTJmNzdmZjI5OGIyZCIsImlhdCI6MTY3Mjg0OTg5OS4xNDAwMjcsIm5iZiI6MTY3Mjg0OTg5OS4xNDAwMzQsImV4cCI6MTcwNDM4NTg5OS4xMjczMjksInN1YiI6IjA3ZWJiYTc3LWQ0ZjktNDc0NS04ZmY4LWMwNGQ1OWI5ZTJkNyIsInNjb3BlcyI6W119.hFp9-0RsIcpmEaY-VzDm7bamkqXzbMX5f-BENGDFdp8e9qaTEjCnAhPpVHktr7TnFLDMBA67nZM50NLzdMIh8BqLuCMItu10mw8SVRXS4V8HcKp2kccb30D3AlrbbZCX3VQhF-TCwEyVh-_Z1ZWbgceB0v3d99YcBQrOtOvDntekQ6l2HGkhf8NOoPzWaT2R51KFdvuVq66eTDU5mfzd50o3VAesxpM8-wsuiyffDE4CjmpvTzhmghj-HKLNNk7v5PBm9LqiVZ6PJSjqJS3itHmlUEkNbETAOlWP8aK837Drmua68VeRxtUMY0LzUTlWa4ZQiVhCQxlKdxdOnprtrPkpGLFfJc-W9sWpxhHir6ui75lZv7e4kBbfDYo5uG32kk_a8Zem3H9vrF4MLGpc8ukcQvtJL16-H6YbOWnQARQsBdzSmLf0OfAbS2rhdTgHIMtt2dwqzYRpd_JvWzHOwSqn9RLY08FydFt9v0CCxh1Ayq_Doo9BvrypTTpP3ylj0GHmbdz5Av_1kiGk4-h8FX_glwrf3sMcYqGxuMfWchePawMeDcLTEo82LlAHV7F8qSb2snFJQYkE7D2xnqt3XHpXY_0zcba3CHoI4TJfikVImfj3vxHLd6BL9XxLS9QqMeK0fk57zd9noOSwOZJj63BOdlc3FblFJAudLYoRm9E`;
        config.headers.Authorization = `Bearer ${value}`;
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    },
);

export default api;