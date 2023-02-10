import * as Yup from 'yup';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const includeDigRegExp = /([0-9]+)/;
const includeCharRegExp = /([A-z]+)/;
const EmailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const LoginSchema = Yup.object().shape({
  email: Yup.string().trim().min(8, 'برجاء ادخال بريد الكتروني صحيح').required('برجاء ادخال بريد الكتروني ').matches(EmailReg, 'برجاء ادخال بريد الكتروني صحيح'),
  password: Yup.string().required('برجاء ادخال كلمة المرور').min(8, 'يجب ان تكون اكثر من 8 ارقام او حروف'),
});




export const SignupSchema = Yup.object().shape({
    
    name : Yup.string().trim().required("برجاء ادخال الاسم"),
    email: Yup.string().trim().min(8, 'برجاء ادخال بريد الكتروني صحيح').required('برجاء ادخال بريد الكتروني ').matches(EmailReg, 'برجاء ادخال بريد الكتروني صحيح'),
    phone : Yup.string().trim().min(8, 'برجاء ادخال رقم الهاتف صحيح ').required('برجاء ادخال رقم الهاتف ').matches(phoneRegExp, 'برجاء ادخال رقم الهاتف صحيح '),
    password: Yup.string().required('برجاء ادخال كلمة المرور').min(8, 'يجب ان تكون اكثر من 8 ارقام او حروف'),
    confirmPassword: Yup.string().required('برجاء تاكيد كلمة المرور').min(8,'يجب ان تكون اكثر من 8 ارقام او حروف').oneOf([Yup.ref('password'), null], 'كلمة المرور غير متطابقة')
    

});