
import {View, StyleSheet,StatusBar, SafeAreaView} from 'react-native';
import Topo from './source/telas/Carrinho/Topo';
import Detalhes from './source/telas/Carrinho/Detalhes';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat'
export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,  
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <View></View>
  }

  return (
    <SafeAreaView style={styles.container}>
      <Topo/>
      <Detalhes/>
      <StatusBar/>
    </SafeAreaView>
  );
}

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      marginHorizontal: 0
    }
  });


