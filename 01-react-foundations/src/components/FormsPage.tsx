import {useForm} from "react-hook-form";

type FormInput = {
    email: string;
    password: string;
}

export const FormsPage = () => {

    const {
        register,
        handleSubmit,
        formState,
        watch
    } = useForm<FormInput>({
        defaultValues: {
            email: "",
            password: ""
        },
    });

    const onSubmit = (myDOrm: FormInput) => {
        console.log({myDOrm});
    }

    console.log(watch('email'));

    return (
        <>
            <h3>Forms</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{
                    display: "flex",
                    flexDirection: 'column'
                }}>
                    <input type="text"
                           placeholder="Email"
                           {...register('email', {required: true})} />

                    <input type="text"
                           placeholder="Password"
                           {...register('password')} />

                    <button type="submit">Login</button>
                </div>
            </form>

            <pre>
                {JSON.stringify(formState, null, 2)}
            </pre>
        </>
    );
}