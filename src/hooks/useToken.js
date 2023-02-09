import { useEffect, useState } from "react";

export const useToken = (email) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://doctors-portal-server-liart-eight.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.accessToken) {
                        localStorage.setItem('token', data.accessToken);
                        setToken(data.accessToken);
                    }
                })
            // axios.get(`https://doctors-portal-server-liart-eight.vercel.app/jwt?email=${email}`)
            //     .then(res => {
            //         if (res.data.accessToken) {
            //             localStorage.setItem('token', res.data.accessToken)
            //             setToken(res.data.accessToken);
            //         }
            //     });

        }
    }, [email])
    return [token]
}
export default useToken;
