import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../api/HelloWorldService.js'


class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            messageRetrive : '',
            messageBeanRetrive : '',
            messageBeanRetrivePathVariable : '',
            errorMessage : ''



        }

        // this.handlesuccessResponse= this.handlesuccessResponse.bind(this)
        this.retriveMessage= this.retriveMessage.bind(this)
        this.retriveBeanMessage= this.retriveBeanMessage.bind(this)
        this.retriveBeanMessagePathVariable= this.retriveBeanMessagePathVariable.bind(this)

    }
    render() {
        return (
            <>

                <div>
                {this.state.errorMessage}
                </div>


                <h1>Welcome!</h1>
                <div className="container">
                {/* Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>. */}
                
                </div>
            

                <div>
                <button type="submit" onClick={this.retriveMessage}>click here to retrive hello world page from backend</button>
                <br/>

                    message retrived :
                    <br/>
                    {this.state.messageRetrive}

                </div>

                
                <div>
                <button type="submit" onClick={this.retriveBeanMessage}>click here to retrive hello world Bean  from backend</button>
                <br/>
                    message retrived :
                    <br/>
                    {this.state.messageBeanRetrive}

                </div>


                <div>
                <button type="submit" onClick={this.retriveBeanMessagePathVariable}>click here to retrive hello world Bean with path variable from backend</button>
                <br/>
                    message retrived :
                    <br/>
                    {this.state.messageBeanRetrivePathVariable}
                </div>
            </>
        )        
    }

    retriveMessage(){
        console.log("retriveMessage bsmALLAH")
        HelloWorldService.retiveBackendAxios()
        .then(response => this.setState({ messageRetrive : response.data }) )
        .catch(error => this.setState({ errorMessage : error.response.data.message}))
    }

    retriveBeanMessage(){
        console.log("messageBeanRetrive bsmALLAH")
        HelloWorldService.retiveBackendBeanAxios()
        .then(response => this.setState({ messageBeanRetrive : response.data.message }) )
        // .then(response => console.log(response.data.message))
        .catch(error => this.setState({ errorMessage : error.response.data.message}))

    }

    retriveBeanMessagePathVariable(){
        console.log("retriveBeanMessagePathVariable bsmALLAH")
        HelloWorldService.retiveBackendBeanPathVariableAxios(this.props.match.params.name)
        .then(response => this.setState({ messageBeanRetrivePathVariable : response.data.message }) )
        // .then(response => console.log(response.data.message))
        .catch(error => this.setState({ errorMessage : error.response.data.message}))
        // .catch(error => console.log(error.response))


    }
    
}



export default WelcomeComponent