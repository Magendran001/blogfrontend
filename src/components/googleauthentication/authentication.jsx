import { Box } from "@chakra-ui/react";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SIGNUPPOST from "../../redux/signupreducer/signupaction";
function Googleauthentication() {

    let dispatch = useDispatch();
    useEffect(() => {

        function handleCredentialResponse(response) {

            console.log("Encoded JWT ID token: " + response.credential);
            let loginobj = jwt_decode(response.credential);
            console.log(loginobj)

            dispatch(SIGNUPPOST({loginobj}))
        }


        window?.google?.accounts.id.initialize({
            client_id: "830310061524-kq0ng8ir72d5mfmoocp68d7iie8o07rg.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        window?.google?.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline" }  // customization attributes
        );
        window.google?.accounts.id.prompt()

    }, [])


    return (



     <Box m={"auto"} w="300px">
        <div>Google Authentication may work or may not depends upon google limit</div>
        <div id="buttonDiv"></div>
     </Box>

        )


}
export default Googleauthentication