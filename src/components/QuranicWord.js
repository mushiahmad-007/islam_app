import React, { Component } from 'react';

import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
/*
import { Button} from "react-native-paper";
import Emoji from 'react-native-emoji';
import { Primary, PrimaryLight, PrimaryDark, Secondary, SecondaryLight, SecondaryDark, PrimaryText, SecondaryText } from '../constants/ColorScheme'
*/

class QuranicWord extends Component {
  render() {
    return (
      
        <View elevation={5} style={styles.main}>
          <View style={styles.title}>
            <View>
              <Image
                style={styles.WordImg}
                source={require('../../assets/images/word.jpg')}
              />
            </View>
            <View style={styles.titleText}>
              <Text style={styles.CardText}>Quranic Word of the Moment</Text>
            </View>
          </View>
          <View style = {styles.Words}>
          <View style={styles.Word}>
            <Text style={styles.WordText}>{this.props.Arabic}</Text>
          </View>
          <View style={styles.Urdu}>
            <Text style={styles.UrduText}>{this.props.Urdu}</Text>
          </View>
          </View>
        </View>
      
    );
  }
}
export default QuranicWord;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    margin: '4%',
    padding: 10,
    borderRadius: 10,
  },
  title: {
    flexDirection: 'row',
  },
  titleText: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  CardText: {
    flexWrap: 'wrap',
    fontSize: 20,
  },
  Words : {
    flexDirection : 'column',
    alignItems : 'center',
  },
  Word :{
    flex : 1,

  },
  WordText: {
    padding : '4%',
    fontSize : 40,
    fontWeight : 'bold',
  },
  Urdu: {
    flex : 1,
  },
  UrduText :{
    fontSize : 18,
  },


  WordImg: {
    borderRadius: 1000,
    height: 50,
    width: 50,
  },
});
