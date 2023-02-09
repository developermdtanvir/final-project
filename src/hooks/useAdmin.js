import { useEffect, useState } from "react";

export const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://doctors-portal-server-liart-eight.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
        return [isAdmin, isLoading]
    }, [email, isAdmin, isLoading])
}