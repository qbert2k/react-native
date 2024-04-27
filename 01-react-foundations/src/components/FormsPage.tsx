import {useForm} from "react-hook-form";

type FormInput = {
    email: string;
    password: string;
}

export const FormsPage = () => {

    const {register} = useForm<FormInput>({
        defaultValues: {
            email: "javier.rojas.blum@gmail.com",
            password: "123456"
        },
    });

    return (
        <>
            <h3>Forms</h3>

            <form>
                <div style={{
                    display: "flex",
                    flexDirection: 'column'
                }}>
                    <input type="text"
                           placeholder="Email"
                           {...register('email')} />

                    <input type="text"
                           placeholder="Password"
                           {...register('password')} />

                    <button type="submit">Login</button>
                </div>
            </form>
        </>
    );
}