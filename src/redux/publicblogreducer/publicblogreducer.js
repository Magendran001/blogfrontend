import { Publicblogsaction } from "./publicblogaction";
const init = { blogs: [], isloading: false, error: false }
const Publicblogreducer = (state = init, { type, payload }) => {

    switch (type) {

        case Publicblogsaction.publicblogreq:
            return { ...state, isloading: true }

        case Publicblogsaction.Publicblogsuccess:
            return { ...state, isloading: false, blogs: payload, error: false }

        case Publicblogsaction.Publicblogerror:
            return { ...state, isloading: false, error: true }

        default:
            return { ...state }
    }
}

export default Publicblogreducer