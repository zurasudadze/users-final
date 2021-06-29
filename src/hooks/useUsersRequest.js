import {useQuery} from 'react-query'
import {api} from "../utils/api";

const fetchUsers = async () => await api('users')

const useUserRequest = () => useQuery('users', fetchUsers)

export default useUserRequest;
