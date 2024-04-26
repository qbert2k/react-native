import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {ReqResUserListResponse, User} from "../interfaces";

const loadUsers = async (page: number = 1): Promise<User[]> => {
    try {
        const {data} = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users', {
            params: {
                page
            }
        });
        return data.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const UsersPage = () => {

    const [users, setUsers] = useState<User[]>([]);
    const currentPageRef = useRef(1);

    useEffect(() => {
        loadUsers().then(setUsers);
    }, []);

    const nextPage = async () => {
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current);

        if (users.length > 0) {
            setUsers(users);
        } else {
            currentPageRef.current--;
        }
    };

    const prevPage = async () => {
        if (currentPageRef.current < 1) return;

        currentPageRef.current--;
        const users = await loadUsers(currentPageRef.current);
        setUsers(users);
    };

    return (
        <>
            <h3>Users Page</h3>

            <table>
                <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user => (
                        <UserRow key={user.id} user={user}/>
                    ))
                }
                </tbody>
            </table>

            <div>
                <button onClick={prevPage}>Prev</button>
                &nbsp;
                <button onClick={nextPage}>Next</button>
            </div>
        </>
    );
};

interface Props {
    user: User;
}

export const UserRow = ({user}: Props) => {
    const {avatar, first_name, last_name, email} = user;

    return (
        <tr>
            <td>
                <img src={avatar}
                     alt="User Avatar"
                     style={{width: '50px'}}/>
            </td>
            <td>{first_name} {last_name}</td>
            <td>{email}</td>
        </tr>
    );
}