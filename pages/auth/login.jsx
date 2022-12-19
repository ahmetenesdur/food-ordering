import { useFormik } from 'formik';
import Link from 'next/link';
import Input from './../../components/form/Input';
import Title from './../../components/ui/Title';
import { loginSchema } from './../../schema/login';
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function Login() {
    const { push } = useRouter();

    const onSubmit = async (values, actions) => {
        const { email, password } = values;
        let options = { redirect: false, email, password };

        try {
            const res = await signIn("credentials", options);
            toast.success("Login successful");
            actions.resetForm();
            push("/profile/639f45733e1ce863e0832665");
        } catch (err) {
            toast.error(err.message);
        }
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
            initialValues: {
                email: "",
                password: "",
            },
            onSubmit,
            validationSchema: loginSchema,
        });

    const inputs = [
        {
            id: 1,
            name: 'email',
            type: 'email',
            placeholder: 'Your Email Address',
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email,
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Your Password',
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password,
        },
    ]

    return (
        <div className="container mx-auto pt-10">
            <form
                className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
                onSubmit={handleSubmit}
            >
                <Title addClass="text-[40px] mb-6">Login</Title>
                <div className="flex flex-col gap-y-3 w-full">
                    {inputs.map((input) => (
                        <Input
                            key={input.id}
                            {...input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    ))}
                </div>
                <div className="flex flex-col w-full gap-y-3 mt-6">
                    <button
                        type="submit"
                        className="btn-primary">
                        LOGIN
                    </button>
                    <button
                        type="button"
                        className="btn-primary !bg-secondary"
                        onClick={() => signIn('github')}>
                        <i className="fa-brands fa-github mr-2 text-lg"></i>
                        GITHUB
                    </button>
                    <Link href="/auth/register">
                        <span className="text-sm underline cursor-pointer text-secondary hover:text-primary">
                            Do not have an account? Register
                        </span>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });

    if (session) {
        return {
            redirect: {
                destination: "/profile/639f45733e1ce863e0832665",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
}

export default Login