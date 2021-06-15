import { useQuery } from 'react-query'

const fetchUsers = async ()=> {
    const response = await fetch('/users')

    return response.json();
}


const useUserRequest = () => useQuery('users', fetchUsers)

export default useUserRequest;
