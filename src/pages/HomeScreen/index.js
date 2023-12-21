import { Container, Title, BtnInicio, TextButton, 
    BtnContainer} from "../../Styles/stylesGlobal";
import { quizzSport } from "../../components/quizzObject/Sports";
import { quizzUniverse } from "../../components/quizzObject/universe";
import { quizzPaises } from "../../components/quizzObject/Paises";

export default function HomeScreen({navigation}){
    return(
        <Container>
            <Title>Quiz Mania</Title>

            <BtnContainer>
                {/* Passan o objeto Json como parametro para a o componete Quizz */}
                <BtnInicio onPress={ ()=> navigation.navigate('Quiz', { questoes: quizzUniverse})}>
                    <TextButton>Universo</TextButton>
                </BtnInicio>
                <BtnInicio onPress={ ()=> navigation.navigate('Quiz', { questoes: quizzSport})}>
                    <TextButton>Esportes</TextButton>
                </BtnInicio>
                <BtnInicio onPress={ ()=> navigation.navigate('Quiz', { questoes: quizzPaises})}>
                    <TextButton>Países e Capitais</TextButton>
                </BtnInicio>
            </BtnContainer>
        </Container>
    )
}