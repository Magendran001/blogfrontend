import { signupaction } from "./signupaction";
import { loginaction } from "../loginreducer/loginaction";

const init = { isloading: false, error: false, done_newuser: false, errormessage: null }
const Signupreducer = (state = init, { type, payload }) => {


    switch (type) {

        case signupaction.REGEISTERREQ:
            return { ...state, isloading: true, error: false }

        case signupaction.REGEISTERSUCCESS:

            return { ...state, isloading: false, error: false, done_newuser: true }

        case signupaction.REGEISTERERROR:
            return { ...state, error: true, errormessage: payload }

        case loginaction.LOGOUTMENTION:
            return { ...state, error: false, done_newuser: false }

        default:
            return { ...state }


    }


}

export default Signupreducer