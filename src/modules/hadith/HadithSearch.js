import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Picker,
  Image,
  TextInput,
  FlatList,
  Keyboard,
  ScrollView,
  Dimensions,
  StatusBar,
  ActivityIndicator,
  Button,
} from 'react-native';
import blueVersion from '../../styles/colors';
import ViewPager from '@react-native-community/viewpager';

import { SearchBar } from 'react-native-elements';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

import { Text } from '../../components/StyledText';

const radio_props = [
  { label: 'English', value: 'english' },
  { label: 'Urdu', value: 'urdu' },
  { label: 'Number', value: 'num' },
];

export default class HadithSearch extends Component {
  state = {
    search: '',
    searchBarFocused: false,
    searchType: 'english',
    index: 0,
    book: 'All Books',
    hadithNo: 1,
    value: 0,
    keyboardType: 'default',
  };
  updateSearch = value => {
    this.setState({ search: value });
  };

  Search() {
    this.props.navigation.navigate;
  }
  render() {
    const { navigate } = this.props.navigation;
    const { search, book, searchType, keyboardType } = this.state;
    function goTohadith() {
      if (search != '') {
        switch (searchType) {
          case 'num':
            if (/^\d+$/.test(search)) {
              navigate('SearchedHadith', {
                bookTitle: book,
                hadithNo: search,
                type: 'number',
              });
            } else {
              alert('Enter digits only or change Search Type');
            }
            break;
          case 'english':
            var english = /^[A-Za-z]*$/;
            if (english.test(search)) {
              navigate('SearchedHadith', {
                bookTitle: book,
                english: search,
                type: 'english',
              });
            } else {
              alert('Enter English alphabets only or change Search Type');
            }
            break;
          case 'urdu':
            var extra =  /^[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?A-Za-z0-9]*$/;
            if (extra.test(search)){
              alert('Enter Urdu alphabets only or change Search Type');
            }
            else{
            navigate('SearchedHadith', {
              bookTitle: book,
              urdu: search,
              type: 'urdu',
            });
          }
        }
      }
      else{
        alert('Enter something to search')
      }
    }
    return (
      <View style={{ padding: '4%' }}>
        <SearchBar
          keyboardType={keyboardType}
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          containerStyle={styles.searchBar}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
        />

        <View style={{ alignItems: 'center', paddingTop: 10 }}>
          <RadioForm
            radio_props={radio_props}
            initial={0}
            formHorizontal={true}
            onPress={value => {
              this.setState({ searchType: value });
              switch (value) {
                case 'num':
                  this.setState({ keyboardType: 'numeric' });
                  break;
                case 'english':
                  this.setState({ keyboardType: 'default' });
                  break;
                case 'urdu':
                  this.setState({ keyboardType: 'default' });
                  break;
              }
            }}
            buttonColor={blueVersion.primaryGradientStart}
            selectedButtonColor={blueVersion.primaryGradientStart}
          />

          <Picker
            selectedValue={this.state.book}
            style={styles.Picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ book: itemValue, index: itemIndex })
            }
          >
            <Picker.Item label="All Books" value="All Books" />
            <Picker.Item label="Al-Bukhari" value="Al-Bukhari" />
            <Picker.Item label="Al-Muslim" value="Al-Muslim" />
            <Picker.Item label="Al-Tirmizi" value="Al-Tirmizi" />
            <Picker.Item label="Abu Dawood" value="Abu Dawood" />
            <Picker.Item label="Al-Nisai" value="Al-Nisai" />
            <Picker.Item label="Ibn e Maja" value="Ibn e Maja" />
          </Picker>
        </View>
        <Button
          color={blueVersion.primaryGradientStart}
          title="Search"
          onPress={goTohadith}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 5,
    backgroundColor: blueVersion.primaryGradientStart,
  },
  inputContainerStyle: {
    backgroundColor: 'white',
  },
  inputStyle: {},
  Picker: {
    marginTop: '2%',
    marginBottom: '2%',
    height: 50,
    width: 250,
    borderRadius: 5,
  },
  viewPager: {
    flex: 1,
  },
});
