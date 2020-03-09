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

const SurahData = [
  {
    id: '1.',
    title: 'Surat-ul-Fateha',
    verses: '7 Verses',
    arabic: 'فاتِحَةُ',
  },
  {
    id: '2.',
    title: 'Surat-ul-Baqara',
    verses: '286 Verses',
    arabic: 'البَقَرة',
  },
  {
    id: '3.',
    title: 'Surat-Aaal-e-Imran',
    verses: '200 Verses',
    arabic: 'آل عِمران',
  },
  {
    id: '4.',
    title: 'Surat-un-Nissa',
    verses: '177 Verses',
    arabic: 'النِّســاء',
  },
  {
    id: '5.',
    title: 'Surat-ul-Maeeda',
    verses: '120 Verses',
    arabic: 'المَـائِدة',
  },
  {
    id: '6.',
    title: 'Surat-ul-Anaam',
    verses: '166 Verses',
    arabic: 'الأنْعـام',
  },
  {
    id: '7.',
    title: 'Surat-ul-Aeyraaf',
    verses: '206 Verses',
    arabic: 'الأعراف',
  },
  {
    id: '8.',
    title: 'Surat-l-Anfaal',
    verses: '75 Verses',
    arabic: 'الأنْفـال',
  },
  {
    id: '9.',
    title: 'Surat-ut-Tauba',
    verses: '129 Verses',
    arabic: 'التـَّوْبَة',
  },
  {
    id: '10.',
    title: 'Surat-Younus',
    verses: '101 Verses',
    arabic: 'النِّســاء',
  },
  {
    id: '11.',
    title: 'Surat-Hud',
    verses: '123 Verses',
    arabic: 'هُود',
  },
  {
    id: '12.',
    title: 'Surat Yousuf',
    verses: '111 Verses',
    arabic: 'يُوسُف',
  },
  {
    id: '13.',
    title: 'Surat-ur-Raad',
    verses: '43 Verses',
    arabic: 'الرَّعد',
  },
  {
    id: '14.',
    title: 'Surat Ibrahim',
    verses: '52 Verses',
    arabic: 'اِبراهيم',
  },
  {
    id: '15.',
    title: 'Surat-ul-Hijir',
    verses: '99 Verses',
    arabic: 'الحِجْر',
  },
  {
    id: '16.',
    title: 'Surat-un-Nahal',
    verses: '128 Verses',
    arabic: 'النًّحل',
  },
  {
    id: '17.',
    title: 'Surat-Bani Israeel',
    verses: '111 Verses',
    arabic: 'الاِسْرآء',
  },
  {
    id: '18.',
    title: 'Surat-ul-Kaahaf',
    verses: '110 Verses',
    arabic: 'الكَهْف',
  },
  {
    id: '19.',
    title: 'Surat Marium',
    verses: '98 Verses',
    arabic: 'مَريَم',
  },
  {
    id: '20.',
    title: 'Surat Tahaa',
    verses: '135 Verses',
    arabic: 'طه',
  },
  {
    id: '21.',
    title: 'Surat-ul-Aanbiya',
    verses: '112 Verses',
    arabic: 'الأنْبيآء',
  },
  {
    id: '22.',
    title: 'Surat-ul-Hajj',
    verses: '78 Verses',
    arabic: 'الحَجّ',
  },
  {
    id: '23.',
    title: 'Surat-ul-Mominoon',
    verses: '118 Verses',
    arabic: 'المؤمِنون',
  },
  {
    id: '24.',
    title: 'Surat-un-Noor',
    verses: '64 Verses',
    arabic: 'النّور',
  },
  {
    id: '25.',
    title: 'Surat-ul-Furqan',
    verses: '77 Verses',
    arabic: 'الفُرقان',
  },
  {
    id: '26.',
    title: 'Surat-us-Shooaraa',
    verses: '227 Verses',
    arabic: 'الشُّـعَراء',
  },
  {
    id: '27.',
    title: 'Surat-un-Namal',
    verses: '93 Verses',
    arabic: 'النَّـمْل',
  },
  {
    id: '28.',
    title: 'Surat-ul-Qasass',
    verses: '88 Verses',
    arabic: 'القَصَص',
  },
  {
    id: '29.',
    title: 'Surat-ul-Ankaboot',
    verses: '69 Verses',
    arabic: 'العَنْـكَبُوت',
  },
  {
    id: '30.',
    title: 'Surat-ur-Room',
    verses: '60 Verses',
    arabic: 'الرُّوم',
  },
  {
    id: '31.',
    title: 'Surat Luqman',
    verses: '34 Verses',
    arabic: 'لُقْمان',
  },
  {
    id: '32.',
    title: 'Surat Assajdah',
    verses: '30 Verses',
    arabic: 'السَّـجْدة',
  },
  {
    id: '33.',
    title: 'Surat-ul-Ahzaab',
    verses: '73 Verses',
    arabic: 'الأحزاب',
  },
  {
    id: '34.',
    title: 'Surat Saba',
    verses: '54 Verses',
    arabic: 'ســَبَأ',
  },
  {
    id: '35.',
    title: 'Surat Faatir',
    verses: '45 Verses',
    arabic: 'فاطِر',
  },
  {
    id: '36.',
    title: 'Surat Yaseen',
    verses: '83 Verses',
    arabic: 'يــس',
  },
  {
    id: '37.',
    title: 'Surat-un-Saaffaat',
    verses: '182 Verses',
    arabic: 'الصّــافّات',
  },
  {
    id: '38.',
    title: 'Surat Suaad',
    verses: '177 Verses',
    arabic: 'ص',
  },
  {
    id: '39.',
    title: 'Surat-uz-Zumur',
    verses: '75 Verses',
    arabic: 'الزُّمَر',
  },
  {
    id: '40.',
    title: 'Surat-ul-Momin',
    verses: '85 Verses',
    arabic: 'المُؤْمِن',
  },
  {
    id: '41.',
    title: 'Surat Ha-meem-Assajdah ',
    verses: '54 Verses',
    arabic: '',
  },
  {
    id: '42.',
    title: 'Surat-us-Shooraa',
    verses: '53 Verses',
    arabic: 'الشُّوری',
  },
  {
    id: '43.',
    title: 'Surat-uz-Zukhruf',
    verses: '89 Verses',
    arabic: 'الزُّخْرُف',
  },
  {
    id: '44.',
    title: 'Surat-ud-Dukhaan',
    verses: '59 Verses',
    arabic: 'الدُّخان',
  },
  {
    id: '45.',
    title: 'Surat-ul-Jasiya',
    verses: '177 Verses',
    arabic: 'الجاثِية',
  },
  {
    id: '46.',
    title: 'Surat-ul-Ehkaaf',
    verses: '177 Verses',
    arabic: 'الأحقاف',
  },
  {
    id: '47.',
    title: 'Surat Muahammad',
    verses: '177 Verses',
    arabic: 'مُحَمّد',
  },
  {
    id: '48.',
    title: 'Surat-ul-Fatah',
    verses: '177 Verses',
    arabic: 'الفَتْح',
  },
  {
    id: '49.',
    title: 'Surat-ul-Hujraat',
    verses: '177 Verses',
    arabic: 'الحُجُرات',
  },
  {
    id: '50.',
    title: 'Surat Qaaf',
    verses: '177 Verses',
    arabic: 'ق',
  },
  {
    id: '51.',
    title: 'Surat-uz-Zaariyaat',
    verses: '177 Verses',
    arabic: 'الذ ّارِيات',
  },
  {
    id: '52.',
    title: 'Surat-ut-Toor',
    verses: '177 Verses',
    arabic: 'الطُّور',
  },
  {
    id: '53.',
    title: 'Surat-un-Najam',
    verses: '177 Verses',
    arabic: 'النَّجْم',
  },
  {
    id: '54.',
    title: 'Surat-ul-Qamar',
    verses: '177 Verses',
    arabic: 'القَمَر',
  },
  {
    id: '55.',
    title: 'Surat-ur-Rehman',
    verses: '177 Verses',
    arabic: 'الرَّحمن',
  },
  {
    id: '56.',
    title: 'Surat-ul-Waqiya',
    verses: '177 Verses',
    arabic: 'الواقِعَة',
  },
  {
    id: '57.',
    title: 'Surat-ul-Hadeed',
    verses: '177 Verses',
    arabic: 'الحَديد',
  },
  {
    id: '58.',
    title: 'Surat-ul-Mujadala',
    verses: '177 Verses',
    arabic: 'المُجادَلة',
  },
  {
    id: '59.',
    title: 'Surat-ul-Hashar',
    verses: '177 Verses',
    arabic: 'الحَشْر',
  },
  {
    id: '60.',
    title: 'Surat-ul-Mumtahina',
    verses: '177 Verses',
    arabic: 'المُمتَحَنة',
  },
  {
    id: '61.',
    title: 'Surat-us-Saff',
    verses: '177 Verses',
    arabic: 'الصَّف',
  },
  {
    id: '62.',
    title: 'Surat-ul-jumaa',
    verses: '177 Verses',
    arabic: 'الجُّمُعة',
  },
  {
    id: '63.',
    title: 'Surat-ul-Munfiqoon',
    verses: '177 Verses',
    arabic: 'المُنافِقُون',
  },
  {
    id: '64.',
    title: 'Surat-ut-Taghabunn',
    verses: '177 Verses',
    arabic: 'التَّغابُن',
  },
  {
    id: '65.',
    title: 'Surat-ut-Tallaq',
    verses: '177 Verses',
    arabic: 'الطَّلاق',
  },
  {
    id: '66.',
    title: 'Surat-ut-Tehreem',
    verses: '177 Verses',
    arabic: 'التَّحْريم',
  },
  {
    id: '67.',
    title: 'Surat-ul-Mulk',
    verses: '177 Verses',
    arabic: 'المُلْك',
  },
  {
    id: '68.',
    title: 'Surat-ul-Qalam',
    verses: '177 Verses',
    arabic: 'القَلـََم',
  },
  {
    id: '69.',
    title: 'Surat-ul-Haaqqaa',
    verses: '177 Verses',
    arabic: 'الحَاقّـَة',
  },
  {
    id: '70.',
    title: 'Surat-ul-Maarijj',
    verses: '177 Verses',
    arabic: 'المَعارِج',
  },
  {
    id: '71.',
    title: 'Surat Nooh',
    verses: '177 Verses',
    arabic: 'نُوح',
  },
  {
    id: '72.',
    title: 'Surat-ul-Jinn',
    verses: '177 Verses',
    arabic: 'الجِنّ',
  },
  {
    id: '73.',
    title: 'Surat-ul-Muzammil',
    verses: '177 Verses',
    arabic: 'المُزَّمّـِل',
  },
  {
    id: '74.',
    title: 'Surat-ul-Mudassir',
    verses: '177 Verses',
    arabic: 'المُدَّثــِّر',
  },
  {
    id: '75.',
    title: 'Surat-ul-Qiyama',
    verses: '177 Verses',
    arabic: 'القِيامَة',
  },
  {
    id: '76.',
    title: 'Surat-ud-Dahar',
    verses: '177 Verses',
    arabic: 'الدَّهر',
  },
  {
    id: '77.',
    title: 'Surat-ul-Mursilaat',
    verses: '177 Verses',
    arabic: 'المُرسَلات',
  },
  {
    id: '78.',
    title: 'Surat-un-Naba',
    verses: '177 Verses',
    arabic: 'النـَّبأ',
  },
  {
    id: '79.',
    title: 'Surat-un-Naziaat',
    verses: '177 Verses',
    arabic: 'النـّازِعات',
  },
  {
    id: '80.',
    title: 'Surat Abas',
    verses: '177 Verses',
    arabic: 'عَبَس',
  },
  {
    id: '81.',
    title: 'Surat-ut-Takveer',
    verses: '177 Verses',
    arabic: 'التـَّكْوير',
  },
  {
    id: '82.',
    title: 'Surat-ul-Infitaar',
    verses: '177 Verses',
    arabic: 'الإنفِطار',
  },
  {
    id: '83.',  
    title: 'Surat-ul-Mutafifeen',
    verses: '177 Verses',
    arabic: 'المُطـَفِّفين',
  },
  {
    id: '84.',
    title: 'Surat-ul-Inshiqaaq',
    verses: '177 Verses',
    arabic: 'الإنشِقاق',
  },
  {
    id: '85.',
    title: 'Surat-ul-Burroj',
    verses: '177 Verses',
    arabic: 'البُروج',
  },
  {
    id: '86.',
    title: 'Surat-ut-Tariq',
    verses: '177 Verses',
    arabic: 'الطّارق',
  },
  {
    id: '87.',
    title: 'Surat-ul-Aala',
    verses: '177 Verses',
    arabic: 'الأعلی',
  },
  {
    id: '88.',
    title: 'Surat-ul-Ghashiya',
    verses: '177 Verses',
    arabic: 'الغاشِيَة',
  },
  {
    id: '89.',
    title: 'Surat-ul-Fajar',
    verses: '177 Verses',
    arabic: 'الفَجْر',
  },
  {
    id: '90.',
    title: 'Surat-ul-Balad',
    verses: '177 Verses',
    arabic: 'البَـلـَد',
  },
  {
    id: '91.',
    title: 'Surat-us-Shams',
    verses: '177 Verses',
    arabic: 'الشــَّمْس',
  },
  {
    id: '92.',
    title: 'Surat-ul-Lail',
    verses: '177 Verses',
    arabic: 'اللـَّيل',
  },
  {
    id: '93.',
    title: 'Surat-uz-Dhuha',
    verses: '177 Verses',
    arabic: 'الضُّحی',
  },
  {
    id: '94.',
    title: 'Surat-us-Sharah',
    verses: '177 Verses',
    arabic: 'الإنشـِراح',
  },
  {
    id: '95.',
    title: 'Surat-ut-Teen',
    verses: '177 Verses',
    arabic: 'التـِّين',
  },
  {
    id: '96.',
    title: 'Surat-ul-Alaq',
    verses: '177 Verses',
    arabic: 'العَلـَق',
  },
  {
    id: '97.',
    title: 'Surat-ul-Qadar',
    verses: '177 Verses',
    arabic: 'القـَدر',
  },
  {
    id: '98.',
    title: 'Surat-ul-Bayyina',
    verses: '177 Verses',
    arabic: 'البَيِّنَة',
  },
  {
    id: '99.',
    title: 'Surat-ul-Zilzaal',
    verses: '177 Verses',
    arabic: 'الزِّلزال',
  },
  {
    id: '100.',
    title: 'Surat-ul-Aadiyaat',
    verses: '177 Verses',
    arabic: 'العـَاديات',
  },
  {
    id: '101.',
    title: 'Surat-ul-Qariya',
    verses: '177 Verses',
    arabic: 'القارِعَة',
  },
  {
    id: '102.',
    title: 'Surat-ut-Takasur',
    verses: '177 Verses',
    arabic: 'التَكاثـُر',
  },
  {
    id: '103.',
    title: 'Surat-ul-Asar',
    verses: '177 Verses',
    arabic: 'العَصْر',
  },
  {
    id: '104.',
    title: 'Surat-ul-Humaza',
    verses: '177 Verses',
    arabic: 'الهُمَزَة',
  },
  {
    id: '105.',
    title: 'Surat-ul-Feel',
    verses: '177 Verses',
    arabic: 'الفيل',
  },
  {
    id: '106.',
    title: 'Surat-ul-Quraish',
    verses: '177 Verses',
    arabic: 'قـُرَيْش',
  },
  {
    id: '107.',
    title: 'Surat-ul-Maoon',
    verses: '177 Verses',
    arabic: 'الماعُون',
  },
  {
    id: '108.',
    title: 'Surat-ul-Kausar',
    verses: '177 Verses',
    arabic: 'الكـَوْثَر',
  },
  {
    id: '109.',
    title: 'Surat-ul-Kafiroon',
    verses: '177 Verses',
    arabic: 'الكافِرون',
  },
  {
    id: '110.',
    title: 'Surat-un-Nasar',
    verses: '177 Verses',
    arabic: 'النـَّصر',
  },
  {
    id: '111.',
    title: 'Surat-ul-Tabbatt',
    verses: '177 Verses',
    arabic: 'تَبَّت',
  },
  {
    id: '112.',
    title: 'Surat-ul-lkhlaas',
    verses: '177 Verses',
    arabic: 'الإخـْلاص',
  },
  {
    id: '113.',
    title: 'Surat-ul-Falaq',
    verses: '177 Verses',
    arabic: 'الفـَلَق',
  },
  {
    id: '114.',
    title: 'Surat-un-Naas',
    verses: '177 Verses',
    arabic: 'النـَّاس',
  },
];
const ParahData =[
  {
    id: '1.',
    title: 'Alif Laam meem',
    verses: '148 Verses',
    arabic: 'الم',
  },
  {
    id: '2.',
    title: 'Sayaqool',
    verses: '148 Verses',
    arabic: 'سَيَقُولُ',
  },
  {
    id: '3.',
    title: 'Tilker rusul',
    verses: '148 Verses',
    arabic: 'تِلْكَ الرُّسُلُ',
  },
  {
    id: '4.',
    title: 'Lann tanaloo',
    verses: '148 Verses',
    arabic: 'لَنْ تَنَالُوا',
  },
  {
    id: '5.',
    title: 'Wal Mohsanaat',
    verses: '148 Verses',
    arabic: 'وَالْمُحْصَنَاتُ',
  },
  {
    id: '6.',
    title: 'La yohibbullaho',
    verses: '148 Verses',
    arabic: 'لَا يُحِبُّ اللَّهُ',
  },
  {
    id: '7.',
    title: 'Wa Iza Samay-oo',
    verses: '148 Verses',
    arabic: 'وَإِذَا سَمِعُوا',
  },
  {
    id: '8.',
    title: 'Walao Annana',
    verses: '148 Verses',
    arabic: 'وَلَوْ أَنَّنَا',
  },
  {
    id: '9.',
    title: 'Qaalal Malao',
    verses: '148 Verses',
    arabic: 'قَالَ الْمَلَأُ',
  },
  {
    id: '10.',
    title: 'Waalamoo',
    verses: '148 Verses',
    arabic: 'وَاعْلَمُوا',
  },
  {
    id: '11.',
    title: 'Yaataziroon',
    verses: '148 Verses',
    arabic: 'فاتِحَةُ',
  },
  {
    id: '12.',
    title: 'Wama min Dabbatin',
    verses: '148 Verses',
    arabic: 'فاتِحَةُ',
  },
  {
    id: '13.',
    title: 'Wama ubarriyo',
    verses: '148 Verses',
    arabic: 'فاتِحَةُ',
  },
  {
    id: '14.',
    title: 'Rubama',
    verses: '148 Verses',
    arabic: 'فاتِحَةُ',
  },
  {
    id: '15.',
    title: 'Subhanal Lazi',
    verses: '148 Verses',
    arabic: 'فاتِحَةُ',
  },
  {
    id: '16.',
    title: 'aala Alam',
    verses: '148 Verses',
    arabic: 'فاتِحَةُ',
  },
  {
    id: '17.',
    title: 'Iqtaraba',
    verses: '148 Verses',
    arabic: 'فاتِحَةُ',
  },
  {
    id: '18.',
    title: 'Qaad Aflahaa',
    verses: '148 Verses',
    arabic: 'فاتِحَةُ',
  },
  {
    id: '19.',
    title: 'Wa qaalal lazina',
    verses: '148 Verses',
    arabic: 'فاتِحَةُ',
  },
  {
    id: '20.',
    title: 'Ammann Khalaq',
    verses: '148 Verses',
    arabic: 'فاتِحَةُ',
  },
  {
    id: '21.',
    title: 'Ultoo ma oohiya',
    verses: '148 Verses',
    arabic: 'فاتِحَةُ',
  },
  {
    id: '22.',
    title: 'Wamaee Yuqnatt',
    verses: '148 Verses',
    arabic: 'فاتِحَةُ',
  },
  {
    id: '23.',
    title: 'Wamaali',
    verses: '148 Verses',
    arabic: 'فاتِحَةُ',
  },
  {
    id: '24.',
    title: 'Faman Azlamo',
    verses: '148 Verses',
    arabic: 'فاتِحَةُ',
  },
  {
    id: '25.',
    title: 'Laeyhi yuraddo',
    verses: '148 Verses',
    arabic: 'فاتِحَةُ',
  },
  {
    id: '26.',
    title: 'Haa Meem',
    verses: '148 Verses',
    arabic: 'فاتِحَةُ',
  },
  {
    id: '27.',
    title: 'Qala fama Khatbokum',
    verses: '148 Verses',
    arabic: 'فاتِحَةُ',
  },
  {
    id: '28.',
    title: 'Qad Samiullaho',
    verses: '148 Verses',
    arabic: 'فاتِحَةُ',
  },
  {
    id: '29.',
    title: 'Tabarakal Lazi',
    verses: '148 Verses',
    arabic: 'فاتِحَةُ',
  },
  {
    id: '30.',
    title: 'Amma',
    verses: '148 Verses',
    arabic: 'فاتِحَةُ',
  },
];

var DATA = SurahData;


var btnSurahColor = 'deepskyblue';
var btnParahColor = blueVersion.primaryGradientStart;

export default class QuranView extends Component {
  state = {
    btnSurah: styles.active,
    btnParah: styles.inactive,
    searchType: 'surah',
  };
  Item({ item, navigate }) {
    return (
      <TouchableOpacity onPress={navigate} style={styles.item}>
        <View style={styles.id}>
          <Text style={styles.idText}>{item.id}</Text>
        </View>
        <View style={styles.description}>
          <View style={styles.title}>
            <Text style={styles.titleText}>{item.title}</Text>
          </View>
          <View style={styles.remaining}>
            <View style={styles.subtitle}>
              <Text style={styles.subtitleText}>{item.verses}</Text>
            </View>
            <View style={styles.arabic}>
              <Text style={styles.arabicText}>{item.arabic}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  navigateToAyat(title){
    if (this.state.searchType == 'surah'){
      this.props.navigation.navigate('Surah', {
        Title: title,
        searchType: 'surah'
      })
    }else{
      this.props.navigation.navigate('Surah', {
        Title: title,
        searchType: 'parah'
      })
    }
  }
  parahPress(){
    this.setState({
      btnSurah: styles.inactive,
      btnParah : styles.active,
      searchType: 'parah',
    });
    DATA = ParahData;
  }
  surahPress(){
    this.setState({
      btnSurah: styles.active,
      btnParah : styles.inactive,
      searchType: 'surah'
    });
    DATA = SurahData;
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
          <TouchableHighlight style={this.state.btnSurah} onPress = {()=>this.surahPress()}>
              <Text style ={styles.btnText}>Surah</Text>
              
          
          </TouchableHighlight>

          <TouchableHighlight style={this.state.btnParah} onPress = {()=>this.parahPress()}>
            <Text style ={styles.btnText} >Parah</Text>
              </TouchableHighlight>
          
        </View>
        <FlatList style = {{marginTop: 55}}
          data={DATA}
          renderItem={({ item }) => (
            <this.Item
              item={item}
              navigate={() => 
                this.navigateToAyat(item.title)                
              }
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

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
