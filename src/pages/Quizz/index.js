import { Container, ContentQuizz } from "./styles";
import { useRoute } from "@react-navigation/native";

import Header from "../../components/header";
import Question from "../../components/options";
import { useEffect, useState } from "react";


export default function Quizz(){
    const {questoes} = useRoute().params
    const[questions, setQuestion] = useState([])

    //estado que controla as 10 questoes random

    useEffect( ()=>{
        const randomQuest = ()=>{
            const itensQuestion = questoes.sort( ()=> Math.random() -0.5)
            const randomItemQest = itensQuestion.slice(0, 10)
            setQuestion(randomItemQest)
        }
        randomQuest()
    }, [])


    return(
        <Container>

            <Header questoes={questoes}/>

            <ContentQuizz>
                <Question questoes={questions}/>
            </ContentQuizz>

        </Container>
    )
}