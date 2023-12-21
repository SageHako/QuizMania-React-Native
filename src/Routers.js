import { createStackNavigator } from "@react-navigation/stack";

import Quizz from "./pages/Quizz";
import HomeScreen from "./pages/HomeScreen";
import Answer from "./components/Answer";

import { quizzUniverse } from "./components/quizzObject/universe";

const Stack = createStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name="Home" 
                component={HomeScreen}/>
            <Stack.Screen name="Quiz" component={Quizz}/>
            <Stack.Screen name="Answer" component={Answer}/>
        </Stack.Navigator>
    )
}