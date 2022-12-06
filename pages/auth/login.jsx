import Title from './../../components/ui/Title';
import Input from './../../components/form/Input';
import { useFormik } from 'formik';
import { loginSchema } from './../../schema/login';

function Login() {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
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
        <div className="container mx-auto">
            <div className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto">
                <Title addClass={'text-[40px]'}>Login</Title>
                <div className='flex flex-col gap-4 mt-10 w-full'>
                    {inputs.map((input) => (
                        <Input
                            key={input.id}
                            {...input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    ))}
                    <div className="flex flex-col w-full gap-y-3 mt-6">
                        <button className="btn-primary">LOGIN</button>
                        <button className="btn-primary !bg-secondary">
                            <i class="fa-brands fa-github"></i>
                            GITHUB
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login