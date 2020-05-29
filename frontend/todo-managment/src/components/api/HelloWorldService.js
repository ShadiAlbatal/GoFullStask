import axios from 'axios'


class HelloWorldService {


    retiveBackendAxios() {
        console.log("Tabarak ALLAH -> retiveBackendAxios ")
        return axios.get('http://localhost:8080/hello')
    }



    retiveBackendBeanAxios() {
        console.log("Tabarak ALLAH Rb Alalameen -> retiveBackendBeanAxios ")
        return axios.get('http://localhost:8080/helloBean')
    }

    retiveBackendBeanPathVariableAxios(name) {
        console.log("Alhamdu ALLAH Rb Alalameen -> retiveBackendBeanPathVariableAxios ")
        return axios.get(`http://localhost:8080/helloBean/${name}`)
    }

}


export default new HelloWorldService()