
import axios from "axios";

const Publicblogsaction = {
    publicblogreq: "publicblogreq",
    Publicblogsuccess: "Publicblogsuccess",
    Publicblogerror: "Publicblogerror",

}

const PUBLICBLOGREQ = () => {
    return { type: Publicblogsaction.publicblogreq }

}
const PUBLICBLOGERROR = () => {
    return { type: Publicblogsaction.Publicblogerror }
}
const PUBLICBLOGSUCCESS = (payload) => {
    return { type: Publicblogsaction.Publicblogsuccess, payload }
}





const Publicblogdata = () => (dispatch) => {




    dispatch(PUBLICBLOGREQ())

    axios.get("http://localhost:4329/blog")
        .then(res => {
            console.log(res)
            dispatch(PUBLICBLOGSUCCESS(res.data))


        })

        .catch(err => { console.log(err); dispatch(PUBLICBLOGERROR()) })



}





export { Publicblogdata, Publicblogsaction }