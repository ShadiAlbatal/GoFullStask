import axios from 'axios'


class TodoDataService {

    retvireTodosFromBackend(username){
        return axios(`http://localhost:8080/users/${username}/todos`)
    }




}


export default new TodoDataService()