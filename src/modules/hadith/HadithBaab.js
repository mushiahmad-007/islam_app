import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Button,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import blueVersion from '../../styles/colors';
import { connect } from 'react-redux';
import {HadithServer} from '../../servers/hadithServer'


class HadithBaab extends Component {
  state = {
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('book'),
    };
  };
  Item({ item, navigate }) {
    return (
      <TouchableOpacity onPress={navigate} style={styles.item}>
        
        <View style={styles.description}>
          <View style={styles.title}>
            <Text style={styles.titleText}>{item.Book_Bab}</Text>
          </View>
          
        </View>
      </TouchableOpacity>
    );
  }
  navigateToHadith(baab){
   this.props.navigation.navigate('SearchedHadith', {
    bookTitle: this.props.navigation.state.params.book,
    baab: baab,
    type: 'baab',
  });
  }
  
  searchPress(){
    this.props.navigation.navigate('HadithSearch' )
  }
  componentDidMount(){
    
    HadithServer.getBookBaabs(this.props.navigation.state.params.book);

  }
  render() {
    const width = Dimensions.get('window').width;
    return (
      <View>
        <View
          style={{
            width: width,
            height: 55,
            flex: 1,
            flexDirection: 'row',
          }}
        >
          <TouchableHighlight style={styles.active} >
              <Text style ={styles.btnText}>Baab</Text>
              
          
          </TouchableHighlight>

          <TouchableHighlight style={styles.inactive} onPress = {()=>this.searchPress()}>
            <Text style ={styles.btnText} >Search</Text>
              </TouchableHighlight>
          
        </View>
        <FlatList style = {{marginTop: 55}}
          data={this.props.baabs}
          renderItem={({ item }) => (
            <this.Item
              item={item}
              navigate={() => 
                this.navigateToHadith(item.Book_Bab)                
              }
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
    return {
      baabs: state.hadithReducer.baabs,
    };
  }

export default connect(mapStateToProps)(HadithBaab)

const styles = StyleSheet.create({
  inactive: {
    flex: 1,
    width: '100%',
    backgroundColor : blueVersion.primaryGradientStart, 
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor : blueVersion.primaryGradientStart,
    height :55,
    justifyContent: 'center',
    borderBottomWidth: 4,
    elevation: 8,
    borderBottomColor: 'white',
  },
  btnText: {
    color: 'white',
    fontSize : 20,
    fontWeight: 'bold',
  },
  item: {
    height: 102,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    padding: '2%',
  },
  description: {
    paddingLeft: '4%',
  },
  idText: {
    fontSize: 24,
  },
  titleText: {
    fontSize: 24,
  },
  subtitle: {
    flex: 1,
  },
  subtitleText: {
    color: 'gray',
    fontSize: 11,
  },
  arabic: {
    flex: 1,
  },
  arabicText: {
    width: 150,
    fontSize: 24,
    color: 'green',
  },
  remaining: {
    flexDirection: 'row',
  },
});
