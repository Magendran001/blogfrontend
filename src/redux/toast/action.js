const toast = {
    toastactive: "toastactive",
    toastinactive: "toastinactive"
}


const Toastactive = () => {
    return { type: toast.toastactive }
}

const Toastinactive = () => {
    return { type: toast.toastinactive }
}






export { Toastactive, Toastinactive, toast }