import {useAuthStore} from "../store";
import {useEffect} from "react";

export const LoginPage = () => {

    const authStatus = useAuthStore(state => state.status)
    const user = useAuthStore(state => state.user)
    const login = useAuthStore(state => state.login);
    const logout = useAuthStore(state => state.logout);

    useEffect(() => {
        setTimeout(() => {
            logout();
        }, 1500);
    }, [])

    if (authStatus === 'checking') {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h3>Login Page</h3>

            {
                (authStatus === 'authenticated')
                    ? <div>Authenticated as: {JSON.stringify(user, null, 2)}</div>
                    : <div>Unauthenticated</div>
            }

            {
                (authStatus === 'authenticated')
                    ? (
                        <button onClick={logout}>Logout</button>
                    )
                    : (
                        <button onClick={() => login('javier.rojas.blum@gmail.com', '123456')}>Login</button>
                    )
            }
        </>
    );
}