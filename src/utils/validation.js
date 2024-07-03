import * as Yup from "yup";

export const signUpValidationSchema = Yup.object().shape({
    full_name: Yup.string().required("Majburiy"),
    email: Yup.string().email("Yaroqsiz elektron pochta manzili").required("Majburiy"),
    password: Yup.string()
                .min(6, 'Parol kamida 6 ta belgidan iborat bo\'lishi kerak')
                .matches(/[A-Z]/, 'Parol kamida bitta katta harfdan iborat bo\'lishi kerak')
                .matches(/[a-z]/, 'Parol kamida bitta kichik harfdan iborat bo\'lishi kerak')
                .matches(/[0-9]/, 'Parolda kamida bitta raqam bo\'lishi kerak')
                .required('Majburiy'),
    phone_number: Yup.string().min(19, "Invalid phone number").required("Phone number is required"),
})

export const signInValidationSchema = Yup.object().shape({
    email: Yup.string().email("Yaroqsiz elektron pochta manzili").required("Majburiy"),
    password: Yup.string()
                .min(6, 'Parol kamida 6 ta belgidan iborat bo\'lishi kerak')
                .matches(/[A-Z]/, 'Parol kamida bitta katta harfdan iborat bo\'lishi kerak')
                .matches(/[a-z]/, 'Parol kamida bitta kichik harfdan iborat bo\'lishi kerak')
                .matches(/[0-9]/, 'Parolda kamida bitta raqam bo\'lishi kerak')
                .required('Majburiy'),
})

export const verifyPassValidationSchema = Yup.object().shape({
    email: Yup.string().email("Yaroqsiz elektron pochta manzili").required("Majburiy"),
})

export const updatePassValidationSchema = Yup.object().shape({
    new_password: Yup.string()
    .min(6, 'Parol kamida 6 ta belgidan iborat bo\'lishi kerak')
    .matches(/[A-Z]/, 'Parol kamida bitta katta harfdan iborat bo\'lishi kerak')
    .matches(/[a-z]/, 'Parol kamida bitta kichik harfdan iborat bo\'lishi kerak')
    .matches(/[0-9]/, 'Parolda kamida bitta raqam bo\'lishi kerak')
    .required('Majburiy'),
    code: Yup.string().required().trim(),
})

export const ServiceValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Kamida ikkita so'zdan iborat bo'lishi shart")
      .max(30)
      .required("Majburiy"),
    price: Yup.number().required("Majburiy").min(0, "Minimal narxi 0"),
  });

  