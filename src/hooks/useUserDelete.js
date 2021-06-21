import {useMutation, useQueryClient} from "react-query";

const deleteUser = async (userId) => {
    const response = await fetch('/users/' + userId, {
        method: 'DELETE',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            id: userId
        })
    })
    return response.json();
}

const useUserDelete = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteUser, {
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        }
    })
}
export default useUserDelete;
