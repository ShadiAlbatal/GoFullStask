import React, {Component} from 'react'
import TodoDataService from '../api/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'


class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            errorMessage : '',
            todos : 
            [
            //  {id: 1, description : 'Learn to Dance', done:false, targetDate: new Date()},
            //  {id: 2, description : 'Become an Expert at React', done:false, targetDate: new Date()},
            //  {id: 3, description : 'Visit India', done:false, targetDate: new Date()}
            ]
        }
    }

    componentDidMount(){
        console.log("Bsm ALLAH Arhman Arhim")
        let username= AuthenticationService.getUserName()
        TodoDataService.retvireTodosFromBackend(username)
        .then(response => this.setState( {todos : response.data} ))
        .catch(error => this.setState( {errorMessage : error.data} ))
    }


    render() {
        return (
            <div>
                 <h1>List Todos</h1>
                 <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>IsCompleted?</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map (
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                            )
                            }
                        </tbody>
                    </table>
                 </div>
            </div>
        )
    }
}

export default ListTodosComponent