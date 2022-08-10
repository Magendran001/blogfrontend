import { Loginpostdata } from "../loginreducer/loginaction"
import axios from "axios"
const signupaction = {

    REGEISTERREQ: "REGEISTERREQ",
    REGEISTERSUCCESS: "REGEISTERSUCCESS",
    REGEISTERERROR: "REGEISTERERROR"
}
export { signupaction }

const SIGNUPREQUEST = () => {
    return { type: signupaction.REGEISTERREQ }
}
const SIGNUPSUCCESS = (payload) => {
    return { type: signupaction.REGEISTERSUCCESS, payload }
}
const SIGNUPERROR = () => {
    return { type: signupaction.REGEISTERERROR }
}

const SIGNUPPOST = (signupobj) => (dispatch) => {


    dispatch(SIGNUPREQUEST())

    axios.post("http://localhost:4329/signup", signupobj)
        .then(res => {


            console.log(res);
            if (res.data?.token) {
                dispatch(SIGNUPSUCCESS(res.data))
            }
            else if (res.data?.errors) {
                dispatch(SIGNUPERROR({ message: "user validations fail" }))
            }
            return res
        })
        .then(res => {
            console.log(res, "2")
            dispatch(Loginpostdata({ email: res.data?.user?.email, password: res.data?.user?.password }))
        })
        .catch(err => {
            console.log(err);
            dispatch(SIGNUPERROR())
        })




}

export default SIGNUPPOST