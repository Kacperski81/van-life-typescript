// UserProvider.tsx
import { useState, PropsWithChildren } from 'react';
import { UserProvider as Provider } from './UserContext';

export const UserProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('vanLife');
        return storedUser ? JSON.parse(storedUser) : { userName: "", isLoggedIn: false };
    })
    // const [user, setUser] = useState(() => {
    //     return JSON.stringify(localStorage.getItem('vanLife')) || {
    //     userName: "",
    //     isLoggedIn: false,
    // }});

    return <Provider value={{ ...user, setUser }}>{children}</Provider>;
}