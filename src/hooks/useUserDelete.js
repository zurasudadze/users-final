import {useMutation, useQueryClient} from "react-query";

const deleteUser = async (userId) => {
    const response = await fetch('/usersasdas/' + userId, {
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
        onMutate: userId => {
            // aq wina variants aseiveb rom tu ramea agadgino
            const previousUsers = queryClient.getQueryData('users')
            queryClient.setQueryData('users', old => {
                // davusghvat errori moxda da ver waishala backgroundshi
                return old.filter(user => user.id !== userId)
            })

            return previousUsers
        },

        onError: (error, _, context) => {
            queryClient.setQueryData('users', context)
        },
        onSettled: () => {
            queryClient.invalidateQueries('users')
        }
    })
}
export default useUserDelete;
