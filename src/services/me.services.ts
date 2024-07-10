import axios from "axios"


class MeService{

getMe(){
    return axios.get("https://randomuser.me/api")
}



}
export default new MeService