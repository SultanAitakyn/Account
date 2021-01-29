import React, {useState, useEffect} from 'react';
import user from "../../assets/img/user.png";
import './styles.scss';
import {getUsers} from "../../api/api";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        city: string
    }
}

function Users() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsers().then(response => {
            setUsers(response.data);
        });
    }, []);

    const usersItems = users.map((v, i) => {
        return <div className="col mb-4" key={i}>
            <div className="user">
                <img className="user-avatar" src={user}/>
                <div className="user__description">Имя: {v.name}</div>
                <div className="user__description">Логин: {v.username}</div>
                <div className="user__description">email: {v.email}</div>
                <div className="user__description">Город: {v.address.city}</div>
            </div>
        </div>
    });

    return (
        <div className="col-md-12 col-lg-10">
            <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4">
                {usersItems}
            </div>
        </div>
    );
}

export default Users;
