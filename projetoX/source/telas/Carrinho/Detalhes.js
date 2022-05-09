import React from 'react';
import {SafeAreaView, ScrollView, View, Image, Text, StyleSheet} from 'react-native';
import Texto from '../../components/Texto';

import antenaWifi from '../../../assets/Itens/antenaWifi.png';
import antena2g3g from '../../../assets/Itens/antena2g3g.png';



export default function Detalhes (){
  return <>
  
    <SafeAreaView>
      
      <Texto style={styles.detalhesCarrinho}>Detalhes do Carrinho</Texto>
      <Texto style={styles.nomeProduto}>Kit IoT</Texto>
      <Texto style={styles.descricaoProduto}>Um Kit IoT que revoluciona a vida das pessoas.</Texto>
      <Texto style={styles.precoProduto}>R$99,00</Texto>
      <Texto style={styles.descricaoProduto}>O kit contém: </Texto>


      <View style={styles.vitrine}>
        <View style={styles.card}>
          <Image style={styles.fotoProduto} source={antenaWifi}/>
          <Texto style={styles.descricaoItem}>Antena Wifi </Texto>

        </View>
        <View style={styles.card}>
          <Image style={styles.fotoProduto} source={antena2g3g}/>
          <Texto style={styles.descricaoItem}>Antena 2g/3g </Texto>

        </View>
      </View>
    
    </SafeAreaView>
   
  </>
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  
  detalhesCarrinho: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 35,
    textAlign: 'center'
  },

  nomeProduto: {
    marginBottom: -10,
    marginTop: 10,
    color: "#ffa500",
    fontWeight:'bold',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
  },

  vitrine: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'green',

  },

  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#ffa500',
    padding: '5%',
    borderRadius: 20

  },

  descricaoItem: {
    color: 'white', 
    margin: 10,
    textAlign: 'center',
    
  },

  fotoProduto: {
    borderRadius: 10,
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    
  },

  vendedor: {
    flexDirection: "row"
  },

  vendedorProduto: {
    color: "#a3a3a3",
    fontSize: 18,
  },

  logoVendedor: {
    width: 30,
    height: 30,
  },

  descricaoProduto: {
    textAlign: "center",
    color: "black",
    fontSize: 20,
    lineHeight: 26,
    paddingVertical: 10,
    
  },

  precoProduto: {
    color: "#ffa500",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "right",
    marginRight: 10

  }
  
});