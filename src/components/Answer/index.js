import { Container, Title, TestRankin, BtnHome, ContentData, TextSub, TextScore, BtnText} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Answer(){
    const navigation = useNavigation()

    const route = useRoute()
    const answerRatings = route.params.answerRatings

    const handleHome = () =>{
        navigation.navigate('Home')
    }
    return(
        <Container>
            <ContentData>
                <Icon name="trophy" size={100} color="#fff" />
                <Title>Parabéns</Title>
                <TextScore>Pontuação {answerRatings} pts </TextScore>
                <TextSub>Quiz Completado com Sucesso</TextSub>
                <TextSub>Você acertou {answerRatings / 10} questões</TextSub>
            </ContentData>
            {/* botão que leva a página principal */}
            <BtnHome onPress={handleHome}>
                <BtnText>Inicio</BtnText>
            </BtnHome>       
        </Container>
    )
}