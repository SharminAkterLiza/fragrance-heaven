import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxioSecure from './useAxioSecure';

const useCart = () => {
    const { user,  loading  } = useAuth();
    
    console.log('user email : ', user);
// const token = localStorage.getItem('access-token');
const axiosSecure = useAxioSecure() ;
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts/carts?email=${user?.email}`, { headers:{
        //         authorization : `bearer ${token}`
        //     }})
        //     return res.json();
        // },
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
         
            console.log('res from axios', res)
            return res.data;
        }
    })
    return [cart,refetch]
}

export default useCart;