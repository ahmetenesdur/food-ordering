import * as Yup from "yup";

export const registerSchema = Yup.object({
    fullName: Yup.string()
        .required("Full name is required")
        .min(3, "Full name must be at least 3 characters"),
    email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),
    password: Yup.string()
        .required("Password is required.")
        .min(8, "Password must be at least 8 characters.")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, and one number."),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
});