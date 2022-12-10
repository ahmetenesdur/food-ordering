import * as Yup from "yup";

export const footerSchema = Yup.object({
    location: Yup.string()
        .required("Location is required.")
        .min(5, "Location must be at least 5 characters."),
    phoneNumber: Yup.string()
        .required("Phone Number is required.")
        .min(10, "Phone number must be at least 10 characters."),
    email: Yup.string()
        .required("Email is required.")
        .email("Email is invalid."),
    desc: Yup.string()
        .required("Description is required.")
        .min(5, "Description must be at least 5 characters."),
    day: Yup.string()
        .required("Day is required.")
        .min(5, "Day must be at least 5 characters."),
    time: Yup.string()
        .required("Time is required.")
        .min(5, "Time must be at least 5 characters."),
});