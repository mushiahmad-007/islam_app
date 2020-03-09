import React from 'react';
import { Image, TouchableOpacity, Dimensions } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AvailableInFullVersion from '../availableInFullVersion/AvailableInFullVersionViewContainer';
import SurahView from '../../modules/quran/SurahView'
import HadithBaab from '../../modules/hadith/HadithBaab'
import HadithView from '../../modules/hadith/HadithView'
import HadithSearch from '../../modules/hadith/HadithSearch'

import { colors, fonts } from '../../styles';

const { width } = Dimensions.get('window');

const headerBackground = require('../../../assets/images/topBarBg.png');

const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
      navigationOptions: () => ({
        title: 'Islam App',
        headerLeft: null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    Surah: {
      screen : SurahView,
      
    },
    SearchedHadith: {
      screen : HadithView,
      
    },  
    HadithBaab: {
      screen : HadithBaab,
      
    },
    HadithSearch: {
      screen: HadithSearch,
      navigationOptions: () => ({
        title: 'Search Hadith',
        headerLeft: props => (
          <TouchableOpacity
            onPress={props.onPress}
            style={{
              paddingLeft: 25,
            }}
          >
            <Image
              source={require('../../../assets/images/icons/arrow-back.png')}
              resizeMode="contain"
              style={{
                height: 20,
              }}
            />
          </TouchableOpacity>
        ),
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    } , 
    Profile: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null,
      },
    },
    Article: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null,
      },
    },
    Chat: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null,
      },
    },
    Messages: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null,
      },
    },
    Charts: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    defaultNavigationOptions: () => ({
      titleStyle: {
        fontFamily: fonts.primaryLight,
      },
      headerStyle: {
        backgroundColor: colors.primary,
        borderBottomWidth: 0,
      },
      headerBackground: (
        <Image
          style={{ flex: 1 }}
          source={headerBackground}
          resizeMode="cover"
        />
      ),
      headerTitleStyle: {
        color: colors.white,
        fontFamily: fonts.primaryRegular,
      },
      headerTintColor: '#222222',
      headerLeft: props => (
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            paddingLeft: 25,
          }}
        >
          <Image
            source={require('../../../assets/images/icons/arrow-back.png')}
            resizeMode="contain"
            style={{
              height: 20,
            }}
          />
        </TouchableOpacity>
      ),
    }),
  },
);

export default createAppContainer(stackNavigator);