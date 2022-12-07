import * as Yup from "yup";

export const loginSchema = Yup.object({
    email: Yup.string()
        .required("Email is required.")
        .email("Email is invalid."),
    password: Yup.string()
        .required("Password is required.")
        .min(8, "Password must be at least 8 characters.")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, and one number."),
});