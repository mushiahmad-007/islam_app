import React, { Component } from 'react';

import { View, Text, StyleSheet, Image ,FlatList, TouchableNativeFeedback, TouchableOpacity, TouchableHighlight} from 'react-native';
/*
import { Button} from "react-native-paper";
import Emoji from 'react-native-emoji';
import { Primary, PrimaryLight, PrimaryDark, Secondary, SecondaryLight, SecondaryDark, PrimaryText, SecondaryText } from '../constants/ColorScheme'
*/

class AyatOfMoment extends Component {
  render() {
    return (
      <TouchableOpacity onPress = {this.props.goToAyat}>
        <View elevation = {5} style = {styles.main}>
          
          <View style={styles.title}>
            <View>
              <Image
                style={styles.AyatImg}
                source={require('../../assets/images/Quran.jpg')}
              />
            </View>
            <View style = {styles.titleText}>
              <View>
                <Text style={styles.CardText}>Ayat of the Moment</Text>
              </View>
              <View>
                <Text style = {styles.subtitle}>{this.props.Surah} ({this.props.Ayat})</Text>
              </View>
            </View>
          </View>
          <View style = {styles.ayat}>
            <Text  >
            {this.props.Urdu}
            </Text>
          </View>
        </View>
        
      </TouchableOpacity>
    );
  }
}
export default AyatOfMoment;

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
      paddingLeft: 10,
  },
  CardText: {
      
    
      fontSize : 20,
  },
  subtitle: {
      fontSize: 11,
      color: 'gray',
  },
  AyatImg: {
    borderRadius: 1000,
    height: 50,
    width: 50,
  },
  ayat: {
      margin: '3%',
  },
  AyatText: {
    
      
  }
});
