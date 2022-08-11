import {toast} from "./action";
const init = { active: false }

const toastreducer = (state = init, { type, payload }) => {

    switch (type) {
        case toast.toastactive:
            {
                return { ...state, active: true }
            }

        case toast.toastinactive:
            {
                return { ...state, active: false }

            }

        default:
            {
                return { ...state }
            }


    }
}

export default toastreducer