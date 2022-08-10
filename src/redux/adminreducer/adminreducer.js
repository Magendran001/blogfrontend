import { adminactions } from "./adminaction";

const init = { data: [], isloading: false, error: false }

const adminreducer = (state = init, { type, payload }) => {


    switch (type) {

        case adminactions.ADMINDATAREQ:
            return { ...state, isloading: true, error: false }
        case adminactions.ADMINDATASUCCESS:
            return { ...state, isloading: false, data: payload, error: false }
        case adminactions.ADMINDATAERROR:
            return { ...state, isloading: false, error: true }

        case adminactions.BLOCKREQ:
            return { ...state, isloading: false, error: false }

        case adminactions.BLOCKSUCCESS:
            return { ...state, isloading: true, error: false }

        case adminactions.BLOCKERROR:
            return { ...state, isloading: false, error: true }

        default:
            return { ...state }
    }


}

export default adminreducer