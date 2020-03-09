import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import { Text } from '../../components/StyledText';

import {SurahServer} from '../../servers/surahServer'
import {connect} from 'react-redux'
import { bindActionCreators } from "redux"


class SurahView extends Component {
  

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('Title'),
    };
  };
  componentDidMount() {
    this.props.navigation.setParams({
      surahTitle: this.props.navigation.state.params.surahTitle,
    });
    if (this.props.navigation.state.params.isSpecific == "True"){
      SurahServer.getAyat(this.props.navigation.state.params.Title, this.props.navigation.state.params.ayat)
    }
    else{
      if (this.props.navigation.state.params.searchType == 'surah'){
      SurahServer.getSurah(this.props.navigation.state.params.Title)
      }
      else{
        SurahServer.getParah(this.props.navigation.state.params.Title)
      }

    }
  }
  Item({ item }) {
    return (
      <View style={styles.item}>
        <View>
          <Text style={styles.idText}> {item.Ayat_no}</Text>
        </View>
        <View>
          <Text style={styles.arabicText}>{item.Text_Arabic}</Text>
        </View>
        <View style = {{paddingTop : '4%'}}>
          <Text style={styles.urduText}>{item.Text_Urdu}</Text>
        </View>
      </View>
    );
  }

  render() {
    const { height, width } = Dimensions.get('window');
    return (
      <View>
        
        <FlatList
          data={this.props.surah}
          renderItem={({ item }) => <this.Item item={item} />}
          keyExtractor={item => item.Id}
        />
      </View>
    );
  }
}
function mapStateToProps(state){
  return {
    surah : state.surahReducer.surah,
    
  }
}


export default connect(mapStateToProps)(SurahView)

const styles = StyleSheet.create({
  surahTitle: {},
  surahTitleText: {},
  item: {
    height: 'auto',
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    padding: '5%',
  },
  idText: {
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 16,
    marginBottom: 10,
    marginRight: 5,
  },
  arabic: {
    flex: 1,
  },
  arabicText: {
    width: 'auto',
    fontSize: 24,
    color: 'green',
  },
  remaining: {
    flexDirection: 'row',
  },
});