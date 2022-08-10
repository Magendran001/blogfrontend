import { useToast,Button,Box } from "@chakra-ui/react"

function ToastExample() {
    const toast = useToast()
    return (
      
        
          toast({
            position: 'top',
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'error',
            duration: 9000,
            isClosable: true,

          })
        
      
      
     
    )
  }

  export default ToastExample
//   function ToastExample({title,description,status}) {
//     const toast = useToast()
//     return (
//       <Button
//         onClick={() =>
//           toast({
//             title,
//             description,
//             status,
//             duration: 9000,
//             isClosable: true,
//           })
//         }
//       >
//         Show Toast
//       </Button>
//     )
//   }
