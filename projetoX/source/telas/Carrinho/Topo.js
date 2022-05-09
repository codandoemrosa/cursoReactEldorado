import React from 'react';
import {Image, Text, View, StyleSheet, Dimensions } from 'react-native';
import Texto from '../../components/Texto';

import topo from '../../../assets/topo.png';
import logoVendedor from '../../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Topo(){
  return <> 
      <Image style={styles.topo} source={topo}/>
        <Texto style={styles.tituloCarrinho}>CARRINHO</Texto>
        <View style={styles.vendedor}>
              <Image style={styles.logoVendedor} source={logoVendedor}/>
              <Texto style={styles.vendedorProduto}>Lojinha da Nuvem</Texto>
        </View>
  </>
}

const styles = StyleSheet.create({

  topo: {
    width: "100%",
    height: 582/772 * width,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    borderColor: "#fff"
  },

  tituloCarrinho: {
    fontWeight: 'bold',
    position: "absolute",
    paddingVertical: "35%",
    textAlign: "center",
    width: "100%",
    fontSize: 50,
    color: "#fff",
    lineHeight: 40,
    
  },

  vendedor: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10
  },

  vendedorProduto: {
    marginLeft: 10,
    color: "#a3a3a3",
    fontSize: 20,
  },

  logoVendedor: {
    borderRadius: 100,
    width: 30,
    height: 30
    },

}); 