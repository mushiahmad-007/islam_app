import React, { Component } from 'react';

import { View, Text, StyleSheet, Image , TouchableOpacity} from 'react-native';
/*
import { Button} from "react-native-paper";
import Emoji from 'react-native-emoji';
import { Primary, PrimaryLight, PrimaryDark, Secondary, SecondaryLight, SecondaryDark, PrimaryText, SecondaryText } from '../constants/ColorScheme'
*/

class HadithOfMoment extends Component {
  render() {
    return (
      <TouchableOpacity onPress = {this.props.goToHadith}>
        <View elevation = {5} style = {styles.main}>
          <View style={styles.title}>
            <View>
              <Image
                style={styles.HadithImg}
                source={require('../../assets/images/Hadith.jpg')}
              />
            </View>
            <View style = {styles.titleText}>
              <View>
                <Text style={styles.CardText}>Hadith of Moment</Text>
              </View>
              <View>
                <Text style = {styles.subtitle}>{this.props.Book} # {this.props.HadeesNo}</Text>
              </View>
            </View>
          </View>
          <View style = {styles.Hadith}>
            <Text  >{this.props.Urdu}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default HadithOfMoment;

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        margin:'4%',
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
      color: 'gray'
  },
  HadithImg: {
    borderRadius: 1000,
    height: 50,
    width: 50,
  },
  Hadith: {
      margin: '3%',
  },
  HadithText: {
    
      
  }
});