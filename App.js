import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';


import Routes from './src/Routers';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#000" // Define a cor de fundo da barra de status
        barStyle="light-content" // Define o estilo dos ícones na barra de status (pode ser 'default', 'light-content' ou 'dark-content')
      />
      <Routes/>
    </NavigationContainer>
  );
}
