
import axios from "axios";
import { Toastactive, Toastinactive } from "../toast/action";

const loginaction = {
    LOGINREQUEST: "LOGINREQUEST",
    LOGINSUCCESS: "LOGINSUCCESS",
    LOGINERROR: "LOGINERROR",
    LOGOUTREQUEST: "LOGOUTREQUEST",
    LOGOUTSUCCESS: "LOGOUTSUCCESS",
    LOGOUTERROR: "LOGOUTERROR",
    LOGOUTMENTION: "LOGOUTMENTION"
}

const POSTLOGINREQ = () => {
    return { type: loginaction.LOGINREQUEST }

}
const LOGOUTMENTION = () => {
    return { type: loginaction.LOGOUTMENTION }
}
const POSTLOGINSUCCESS = (payload) => {
    return { type: loginaction.LOGINSUCCESS, payload }
}

const POSTLOGINERROR = () => {

    return { type: loginaction.LOGINERROR }
}

const POSTLOGOUTREQ = () => {

    return { type: loginaction.LOGOUTREQUEST }
}

const POSTLOGOUTSUCCESS = () => {
    return { type: loginaction.LOGOUTSUCCESS }
}

const POSTLOGOUTERROR = () => {
    return { type: loginaction.LOGOUTERROR }
}

export { POSTLOGINREQ, POSTLOGINSUCCESS, POSTLOGINERROR }
const Loginpostdata = (loginobj) => (dispatch) => {




    dispatch(POSTLOGINREQ())

    axios.post("https://blogreduxbackend.herokuapp.com/login", loginobj)
        .then(res => {
            console.log(res)
            dispatch(POSTLOGINSUCCESS(res.data))


        })
        .then((res) => {

            dispatch(Toastactive())
        })
        .then((res) => {

            dispatch(Toastinactive())
        })

        .catch(err => {


            if (err.response) {
                console.log(err.response)
                alert("Kindly enter valid user credentials")
                dispatch(POSTLOGINERROR())
            }


        })



}

const Logoutpostdata = () => (dispatch) => {

    try {
        console.log("yes")
        dispatch(POSTLOGOUTREQ())
        dispatch(POSTLOGOUTSUCCESS())
        dispatch(LOGOUTMENTION())

    }

    catch (err) {

        dispatch(POSTLOGOUTERROR())
    }




}



export { loginaction, Loginpostdata, Logoutpostdata }