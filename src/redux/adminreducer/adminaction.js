import axios from "axios"
const adminactions = {

    ADMINDATAREQ: "ADMINDATAREQ",
    ADMINDATASUCCESS: "ADMINDATASUCCESS",
    ADMINDATAERROR: "ADMINDATAERROR",
    BLOCKREQ: "BLOCKREQ",
    BLOCKSUCCESS: "BLOCKSUCCESS",
    BLOCKERROR: "BLOCKERROR"
}
export { adminactions }

const BLOCKREQ = () => {
    return { type: adminactions.BLOCKREQ }
}

const BLOCKSUCCESS = (payload) => {
    return { type: adminactions.BLOCKSUCCESS, payload }
}

const BLOCKERROR = () => {
    return { type: adminactions.BLOCKERROR }
}
const ADMINDATAREQ = () => {

    return { type: adminactions.ADMINDATAREQ }
}
const ADMINDATASUCCESS = (payload) => {

    return { type: adminactions.ADMINDATASUCCESS, payload }
}

const ADMINDATAERROR = () => {
    return { type: adminactions.ADMINDATAERROR }
}

const ADMINGETDATA = (config) => (dispatch) => {
    dispatch(ADMINDATAREQ())

    axios.get("https://blogreduxbackend.herokuapp.com/admin/allusers", config)
        .then(res => dispatch(ADMINDATASUCCESS(res.data)))
        .catch(err => dispatch(ADMINDATAERROR()))


}

const Blockuser = (id, config) => (dispatch) => {

    dispatch(BLOCKREQ())

    axios.patch(`https://blogreduxbackend.herokuapp.com/admin/blockuser/${id}`, {}, config)
        .then(res => {
            dispatch(BLOCKSUCCESS(res.data))

            console.log(res)
            return res
        })
        .then(res => {
            dispatch(ADMINGETDATA(config))

            console.log(config, "in reducer")

        })

        .catch(err => { console.log(err); dispatch(BLOCKERROR()) })



}

export { ADMINGETDATA, Blockuser }