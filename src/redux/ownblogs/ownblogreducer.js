import { ownblogaction } from "./ownblogaction";
const init = { data: [], isloading: false, error: false, owndata: [] }
const ownblogreducer = (state = init, { type, payload }) => {


    switch (type) {

        case ownblogaction.OWNBLOGREQ:
            return { ...state, isloading: true, error: false }

        case ownblogaction.OWNBLOGSUCCESS:
            return { ...state, isloading: false, data: payload, error: false }

        case ownblogaction.OWNBLOGERROR:
            return { ...state, isloading: false, error: true }

        case ownblogaction.POSTBLOGREQ:
            return { ...state, isloading: true }

        case ownblogaction.POSTBLOGSUCCESS:
            return { ...state, isloading: false, owndata: payload }

        case ownblogaction.POSTBLOGERROR:
            return { ...state, error: true, isloading: false }

        default:
            return state
    }

}

export default ownblogreducer