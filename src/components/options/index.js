import { useState } from "react";
import { Button, TextButton, TitleQuestion, Container, ContenTitle, ContentLine } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Question({questoes}){
    const navigation = useNavigation()

    const[currentQuestion, setCurrentQuestions] = useState(0)
    const[numberQuestion, setNumberQuestion] = useState(1)
    const[itemSelect, setItemSelect] = useState(null)

    const[answerRatings, setAnswerRatings] = useState(0)

    const handleSelectItem = (opcaoIndex) =>{
        setItemSelect(opcaoIndex)        
        //verifica se a resposta está correta.
        const answerSelect = questoes[currentQuestion].opcoesResposta[opcaoIndex]
        const answerCurrent = questoes[currentQuestion].respostaCorreta
        if(answerCurrent === answerSelect){
            setAnswerRatings(answerRatings + 10)           
        }
    }

    //função que passa para a prox pergunta
    const nextQuestion = () =>{
        if(currentQuestion < questoes.length - 1){
            setCurrentQuestions(currentQuestion +1 )
            setNumberQuestion(numberQuestion + 1)
            setItemSelect(null)
        }else{
            //chama tela de resultados quando responder todas as perguntas.
            navigation.navigate('Answer', {answerRatings})
        }
    }

    return(
        <>
            {questoes.map((questao, index) => (
            // Renderiza apenas a questão atual com base no estado currentQuestion
                index === currentQuestion && (
                <Container key={index}>
                    <ContenTitle>
                        <TitleQuestion>{numberQuestion}º Pergunta</TitleQuestion>
                        <ContentLine></ContentLine>
                        <TitleQuestion>{questao.pergunta}</TitleQuestion>
                    </ContenTitle>
                        {questao.opcoesResposta.map((opcao, opcaoIndex) => (
                            
                    <Button 
                        key={opcaoIndex}
                        onPress={ () => handleSelectItem(opcaoIndex)}
                        style={{
                            backgroundColor: itemSelect === opcaoIndex? '#ff4f04': '#fff'
                        }}>
                        <TextButton
                            style={{
                                color: itemSelect === opcaoIndex ? "#fff" : "#000",
                              }}>{opcao}</TextButton>
                    </Button>
                    ))}
                </Container>
                )
            ))}
      {/* Botão para avançar para a próxima questão */}
            <Button onPress={nextQuestion}>
                <TextButton>Próximo</TextButton>
            </Button>
        </>
    )
}