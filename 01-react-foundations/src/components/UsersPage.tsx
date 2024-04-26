import {useEffect} from "react";

export const UsersPage = () => {

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
            .then(resp => resp.json())
            .then(data => console.log(data))
    }, []);

    return (
        <>
            <h3>Users Page</h3>

            <table>
                <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>avatar</td>
                    <td>nombre</td>
                    <td>email</td>
                </tr>
                </tbody>
            </table>
        </>
    );
};