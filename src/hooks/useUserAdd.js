import {useMutation, useQueryClient} from "react-query";

const addUser = async (user) => {
    const response = await fetch('/users', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(user)
    })

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
