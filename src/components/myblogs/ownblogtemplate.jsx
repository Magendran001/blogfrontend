import { Box, Flex, Heading ,Image,Text,Link,Container} from "@chakra-ui/react";


const Ownbloglist = ({data}) => {


    console.log(data,"mybogs")
    return (
      <Container maxW={'7xl'} p="12" >
        
        <Box
          marginTop={{ base: '1', sm: '5' }}
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between">
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center">
            <Box
              width={{ base: '100%', sm: '85%' }}
              zIndex="2"
              marginLeft={{ base: '0', sm: '5%' }}
              marginTop="5%">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  borderRadius="lg"
                  src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                  }
                  alt="some good alt text"
                  objectFit="contain"
                />
              </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
               
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}>
            
            <Heading marginTop="1">
           
                {data.title}
              
            </Heading>
            <Text
              as="p"
              marginTop="2"
             
              fontSize="lg">
               {data.desc}
            </Text>
            <BlogAuthor name={data.user_id? data.user_id.firstname:"john "}  />
          </Box>
        </Box>
       
      </Container>
    );
  };

  export default Ownbloglist

  export const BlogAuthor= (props) => {
    
    return (
      <Flex  mt="2" gap={"10px"} alignItems="center" >
        <Image
          borderRadius="full"
          boxSize="40px"
          src="https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png"
          alt={`Avatar of ${props.name}`}
        />
        <Text fontWeight="medium">{props.name}</Text>
      
       
      </Flex>
    );
  };