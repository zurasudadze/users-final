import {useMutation, useQueryClient} from "react-query";
import {api} from "../utils/api";

const addUser = async (user) => {
    const response = await api('/users', {data: user })

    return response.json();
}


const useUserAdd = () => {
    const queryClient = useQueryClient();
    return useMutation(addUser, {
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        }
    })

}
export default useUserAdd;
