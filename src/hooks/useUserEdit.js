import {useMutation, useQueryClient} from "react-query";

const editUser = async (user) => {

    const response = await fetch('/users/' + user.id , {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(user)
    })

    return response.json();
}

const useUserEdit = () => {
    const queryClient = useQueryClient();

    return useMutation(editUser, {
        onSuccess: ()=> {
            queryClient.invalidateQueries('users')
        }
    })
}

export default useUserEdit;
