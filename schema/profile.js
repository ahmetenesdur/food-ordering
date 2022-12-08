import * as Yup from "yup";

export const profileSchema = Yup.object({
    fullName: Yup.string()
        .required("Full name is required.")
        .min(3, "Full name must be at least 3 characters."),
    phoneNumber: Yup.string()
        .required("Phone Number is required.")
        .min(10, "Phone number must be at least 10 characters."),
    email: Yup.string()
        .required("Email is required.")
        .email("Email is invalid."),
    address: Yup.string()
        .required("Address is required.")
        .min(3, "Address must be at least 3 characters."),
    job: Yup.string()
        .required("Job is required.")
        .min(3, "Job must be at least 3 characters."),
    bio: Yup.string()
        .required("Bio is required.")
        .min(3, "Bio must be at least 3 characters."),
});