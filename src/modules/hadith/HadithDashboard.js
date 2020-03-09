import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
  
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import { white } from 'ansi-colors';

import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
const Months = [
  'January',
  'Febraury',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const Days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

class HadithDashboard extends Component {
  state = {
    date: 'N/A',
  };
  goToHadith(book){
    this.props.navigation.navigate('HadithBaab', { book: book})
  }
  componentDidMount() {
    const date = new Date();
    var day = Days[date.getDay()];
    var month = Months[date.getMonth()];
    this.setState({
      date:
        day + ', ' + month + ' ' + date.getDate() + ', ' + date.getFullYear(),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/images/Mosque.jpg')}
          style={styles.bgImage}
          resizeMode="cover"
        >
          <ScrollView>
            <View style={styles.Temperature}>
              <Text style={styles.TemperatureText}>{this.props.hijriDay}</Text>
            </View>
            <View style={styles.DateIsl}>
              <Text style={styles.DateIslText}>
                {this.props.hijriMonth},{this.props.hijriYear}
              </Text>
            </View>
            <View style={styles.Date}>
              <Text style={styles.DateText}>{this.state.date}</Text>
            </View>





            <View style={styles.booksContainer}>
              <TouchableOpacity  style={styles.card} onPress = {() => {this.goToHadith('Al-Bukhari')}}>
                <Image
                  style={styles.cardImg}
                  source={require('../../../assets/images/bukhari.png')}
                />
                <Text style={styles.cardText}>Al-Bukhari</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.card} onPress = {() => {this.goToHadith('Al-Muslim')}}>
                <Image
                  style={styles.cardImg}
                  source={require('../../../assets/images/muslim.png')}
                />
                <Text style={styles.cardText}>Al-Muslim</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.booksContainer}>
              <TouchableOpacity  style={styles.card} onPress = {() => {this.goToHadith('Al-Tirmizi')}}>
                <Image
                  style={styles.cardImg}
                  source={require('../../../assets/images/tirmizi.png')}
                />
                <Text style={styles.cardText}>Al-Tirmizi</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.card} onPress = {() => {this.goToHadith('Abu Dawood')}}>
                <Image
                  style={styles.cardImg}
                  source={require('../../../assets/images/abudawood.png')}
                />
                <Text style={styles.cardText}>Abu Dawood</Text>
              </TouchableOpacity>
            </View><View style={styles.booksContainerLast}>
              <TouchableOpacity  style={styles.card} onPress = {() => {this.goToHadith('Al-Nisai')}}>
                <Image
                  style={styles.cardImg}
                  source={require('../../../assets/images/Quran.jpg')}
                />
                <Text style={styles.cardText}>Al-Nisai</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.card} onPress = {() => {this.goToHadith('Ibn-e-Maja')}}>
                <Image
                  style={styles.cardImg}
                  source={require('../../../assets/images/ibnemaja.png')}
                />
                <Text style={styles.cardText}>Ibn-e-Maja</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    hijriDay: state.homeReducer.day,
    hijriMonth: state.homeReducer.month,
    hijriYear: state.homeReducer.year,
  };
}

export default connect(mapStateToProps)(HadithDashboard);

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    flex: 1,
    width: 400,
    height: 150,
    backgroundColor: 'white',
    alignItems: 'center',
    marginLeft: 5,
    marginRight:5,
    elevation: 5,
  },
  cardText: { fontSize: 20, textAlign: 'center' },
  cardImg: {
    borderRadius: 1000,
    height: 70,
    width: 70,
    padding: 5,
    marginTop: 20,
  },
  booksContainer: {
    flexDirection: 'row',
    marginTop: '20%',
    margin: '2%',
    flex: 1,
    justifyContent: 'center',
    height: 90,
  },
  booksContainerLast: {
    flexDirection: 'row',
    marginTop: '20%',
    margin: '2%',
    flex: 1,
    justifyContent: 'center',
    
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
    height: 300,
    width: '100%',
  },
  Temperature: {
    paddingLeft: '5%',
    paddingTop: '5%',
  },
  DateIsl: {
    paddingLeft: '5%',
  },
  Date: {
    paddingLeft: '5%',
  },
  TemperatureText: {
    color: 'white',
    fontSize: 32,
  },
  DateIslText: {
    color: 'white',
    fontSize: 16,
  },
  DateText: {
    color: 'white',
    fontSize: 16,
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});
