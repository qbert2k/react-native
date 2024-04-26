import {useEffect} from "react";
import axios from "axios";

export const UsersPage = () => {

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
            .then(resp => console.log(resp.data));
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