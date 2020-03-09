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
import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import blueVersion from '../../styles/colors';
import {HadithServer} from '../../servers/hadithServer'
import {connect} from 'react-redux'


const DATA = [
  {
    id: '455',
    arabic:
      'لَّيسَ ٱلبِرَّ أَن تُوَلُّواْ وُجُوهَكُمۡ قِبَلَ ٱلمَشرِقِ وَٱلمَغرِبِ وَلَـٰكِنَّ ٱلبِرَّ مَنۡ ءَامَنَ بِٱللَّهِ وَٱليَوۡمِ ٱلأَخِرِ وَٱلمَلَـٰئكَةِ وَٱلكِتَـٰبِ وَٱلنَّبِيِّـنَ وَءَاتَى ٱلمَالَ عَلَىٰ حُبِّهِۦ ذَوِى ٱلقُرۡبَىٰ',
    urdu: 'شروع الله کے نام سے جو بڑا مہربان نہایت رحم والا ہے',
    bookTitle: 'Sahih Bukhari'
  },
];

class HadithView extends Component {
  state = {
    id: 0,
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('bookTitle'),
    };
  };
  
  componentDidMount(){
    if (this.props.navigation.state.params.type == 'english'){
      HadithServer.getHadithByEnglish(this.props.navigation.state.params.bookTitle, this.props.navigation.state.params.english);
    }
    if (this.props.navigation.state.params.type == 'number'){
      HadithServer.getHadithByNo(this.props.navigation.state.params.bookTitle, this.props.navigation.state.params.hadithNo);
    }
    else if (this.props.navigation.state.params.type == 'urdu'){
      HadithServer.getHadithByUrdu(this.props.navigation.state.params.bookTitle,this.props.navigation.state.params.urdu)
    }
    else {
      HadithServer.getHadithByBaab(this.props.navigation.state.params.bookTitle,this.props.navigation.state.params.baab)
    }
  }
  Item({ item, type}) {
    if (type == 'english'){
    return (
      <View style={styles.item}>
        <View>
          <Text style={styles.idText}>{item.Book} Hadith # {item.Hadees_No}</Text>
        </View>
        <View>
          <Text style={styles.arabicText}>{item.Text_Arabic}</Text>
        </View>
        <View style = {{paddingTop : '4%'}}>
          <Text style={styles.urduText}>{item.Text_English}</Text>
        </View>
      </View>
    );
    }
    return (
      <View style={styles.item}>
        <View>
          <Text style={styles.idText}>{item.Book} Hadith # {item.Hadees_No}</Text>
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
          data={this.props.hadiths}
          renderItem={({ item }) => <this.Item item={item} type = {this.props.navigation.state.params.type} />}
          keyExtractor={item => item.Id}
        />
      </View>
    );
  }
}
function mapStateToProps(state){
  return {
    hadiths : state.hadithReducer.hadiths,
  }
}


export default connect(mapStateToProps)(HadithView)

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
