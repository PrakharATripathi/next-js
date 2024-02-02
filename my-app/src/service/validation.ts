import * as Yup from "yup";
export const cheaboxValidate = Yup.object({
    name: Yup.string().trim().required("Role is required"),
    status: Yup.string().required("Status is required"),
})