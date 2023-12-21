import { Container, Title, SubTitle} from "./styles"

export default function Header( {questoes}){
    const theme = questoes[0].tema
    return(
        <Container>
            <SubTitle>Tema : {theme}</SubTitle>
        </Container>
    )
}