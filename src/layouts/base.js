import {Container} from "@chakra-ui/react";

export default function BaseLayout({children}) {
    return <Container maxW={'7xl'}>
        {children}
    </Container>
}
