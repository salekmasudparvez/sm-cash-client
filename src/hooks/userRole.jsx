
import {
    useQuery
  } from '@tanstack/react-query'
import axios from 'axios';
const userRole = () => {
    const query = useQuery({
        queryKey: 'userRole',
        queryFn: async () => {
            const response = await axios('');
            return await response.json();
        },
        staleTime: 60000,
        refetchInterval: 60000,
        retry: 3
    })
};

export default userRole;