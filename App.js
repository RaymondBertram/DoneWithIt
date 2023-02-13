import { 
  Dimensions,
  StyleSheet, 
  View, 
} from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';



export default function App() {
  const dimensionWidth = Dimensions.get('screen').width; 
  const dimensionHeight = Dimensions.get('screen').height; 

  return <WelcomeScreen/>
}

const styles = StyleSheet.create({
  
})
