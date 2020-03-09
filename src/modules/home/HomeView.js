import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import { white } from 'ansi-colors';

import AyatOfMoment from '../../components/AyatOfMoment';
import HadithOfMoment from '../../components/HadithOfMoment';
import QuranicWord from '../../components/QuranicWord';
import NamesOfAllah from '../../components/NamesOfAllah';
import DuaOfTheMoment from '../../components/DuaOfTheMoment';

import { HomeServer } from '../../servers/homeServer';

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
class HomeScreen extends Component {
  state = {
    date: 'N/A',
  };
  componentDidMount() {
    const date = new Date();
    var day = Days[date.getDay()];
    var month = Months[date.getMonth()];
    this.setState({
      date:
        day + ', ' + month + ' ' + date.getDate() + ', ' + date.getFullYear(),
    });
    month = date.getMonth() + 1;
    var dateSend = date.getDate() + '-' + month + '-' + date.getFullYear();
    HomeServer.getHijri(dateSend);
    this.props.getDuaOfTheMoment();
    this.props.getAyatOfTheMoment();
    this.props.getNameofAllah();
    this.props.getQuranicWord();
    this.props.getHadeesOfTheMoment();
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
            <View style={styles.componentContainer}>
              
              <AyatOfMoment
                Urdu={this.props.ayatOfTheMoment.Text_Urdu}
                Surah={this.props.ayatOfTheMoment.Surah}
                Ayat={this.props.ayatOfTheMoment.Ayat_No}
                goToAyat={() =>
                  this.props.navigation.navigate('Surah', {
                    Title: this.props.ayatOfTheMoment.Surah,
                    ayat: this.props.ayatOfTheMoment.Ayat_No,
                    isSpecific: 'True',
                  })
                }
              />
              
              <HadithOfMoment
                Book={this.props.hadeesOfTheMoment.Book}
                HadeesNo={this.props.hadeesOfTheMoment.Hadees_No}
                Urdu={this.props.hadeesOfTheMoment.Text_Urdu}
                goToHadith={() =>
                  this.props.navigation.navigate('SearchedHadith', {
                    bookTitle: this.props.hadeesOfTheMoment.Book,
                    hadithNo: this.props.hadeesOfTheMoment.Hadees_No,
                    type: 'number',
                  })
                }
              />
              
              
              <DuaOfTheMoment dua={this.props.duaOfTheMoment.Text_Urdu} />
              
              <QuranicWord
                Arabic={this.props.quranicWord.Text_Arabic}
                Urdu={this.props.quranicWord.Text_Urdu}
              />
              
              
              
              
              <NamesOfAllah
                Arabic={this.props.nameOfAllah.Text_Arabic}
                Urdu={this.props.nameOfAllah.Text_Urdu}
              />
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
    duaOfTheMoment: state.homeReducer.duaOfTheMoment,
    ayatOfTheMoment: state.homeReducer.ayatOfTheMoment,
    hadeesOfTheMoment: state.homeReducer.hadeesOfTheMoment,
    nameOfAllah: state.homeReducer.nameOfAllah,
    quranicWord: state.homeReducer.quranicWord,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getDuaOfTheMoment: () => dispatch(HomeServer.getDuaOfTheMoment),
    getAyatOfTheMoment: () => dispatch(HomeServer.getAyatOfTheMoment),
    getHadeesOfTheMoment: () => dispatch(HomeServer.getHadeesOfTheMoment),
    getNameofAllah: () => dispatch(HomeServer.getNameofAllah),
    getQuranicWord: () => dispatch(HomeServer.getQuranicWord),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  componentContainer: {
    marginTop: 70,
    flex:1,
    flexDirection:'column',

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
});
