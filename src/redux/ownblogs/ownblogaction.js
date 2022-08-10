import axios from "axios";
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
    axios.get(`http://localhost:4329/blog/${id}`, config)
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

    axios.post("http://localhost:4329/blog", blogdata, config)
        .then(res => {
            console.log(res);
            dispatch(POSTBLOGSUCCESS())
        })
        .catch(err => {

            console.log(err);
            if (err?.response?.data?.message) {

                alert(err.response.data.message)

            }


            dispatch(POSTBLOGERROR())
        })


}

export { PostBlog }
export default Fetchblogbyid