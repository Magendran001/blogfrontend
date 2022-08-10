import { Box, Spinner } from "@chakra-ui/react"

function Spinnerload(){


    return (<Box w="100px" h="100px"  position="absolute"
    top={"45%"}
    left="45%" rounded="20" backgroundColor={"white"} border="1px solid yellow" zIndex="1"><Spinner
        
        thickness="4px"
        speed="0.65s"
        emptyColor="red"
        color="white"
        size="xl"
        pos={"absolute"}
        left="25%"
        top={"25%"}


      />
      </Box>)
}
export default Spinnerload