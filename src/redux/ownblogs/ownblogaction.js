import axios from "axios";
import { Toastactive, Toastinactive } from "../toast/action";
const ownblogaction = {

    OWNBLOGREQ: "OWNBLOGREQ",
    OWNBLOGSUCCESS: "OWNBLOGSUCCESS",
    OWNBLOGERROR: "OWNBLOGERROR",
    POSTBLOGREQ: "POSTBLOGREQ",
    POSTBLOGSUCCESS: "POSTBLOGSUCCESS",
    POSTBLOGERROR: "POSTBLOGERROR"
}
export { ownblogaction }

const OWNBLOGREQ = () => {
    return { type: ownblogaction.OWNBLOGREQ }
}

const OWNBLOGSUCCESS = (payload) => {
    return { type: ownblogaction.OWNBLOGSUCCESS, payload }
}

const OWNBLOGERROR = () => {
    return { type: ownblogaction.OWNBLOGERROR }
}
const POSTBLOGREQ = () => {

    return { type: ownblogaction.OWNBLOGREQ }
}

const POSTBLOGSUCCESS = (payload) => {
    return { type: ownblogaction.OWNBLOGSUCCESS, payload }
}
const POSTBLOGERROR = () => {
    return { type: ownblogaction.OWNBLOGERROR }
}


const Fetchblogbyid = (config, id) => (dispatch) => {


    dispatch(OWNBLOGREQ())

    axios.get(`https://blogreduxbackend.herokuapp.com/blog/${id}`, config)

        .then(res => {


            console.log(res)

            dispatch(OWNBLOGSUCCESS(res.data))
        })
        .catch(err => {
            dispatch(OWNBLOGERROR())
            console.log(err)
        })



}

const PostBlog = (blogdata, config) => (dispatch) => {

    dispatch(POSTBLOGREQ())

    axios.post("https://blogreduxbackend.herokuapp.com/blog", blogdata, config)
        .then(res => {
            console.log(res, "res");

            dispatch(POSTBLOGSUCCESS())


        })
        .then((res) => {

            dispatch(Toastactive())
        })
        .then((res) => {

            dispatch(Toastinactive())
        })
        .catch(err => {

            console.log(err);
            if (err?.response?.data?.message) {
                dispatch(POSTBLOGERROR())
                alert("Enter Valid data to post your Blog")

            }



        })


}

export { PostBlog }
export default Fetchblogbyid