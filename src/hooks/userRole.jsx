

import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import axios from 'axios';
const userRole = () => {
  const { userEmail, loading } = useAuth()

  const { data: role = '', isLoading } = useQuery({
    queryKey: ['role', userEmail],
    enabled: !loading && !!userEmail,
    queryFn: async () => {
      const { data } = await axios(`https://server-coral-nine.vercel.app/useRole/${userEmail}`)
      console.log(data.role)
      return data
    },
  })


  return [role, isLoading]
}

export default userRole