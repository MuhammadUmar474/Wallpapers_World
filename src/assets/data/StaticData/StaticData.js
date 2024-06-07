import {COLORS} from '../../../shared/theme';
import {
  Entypo,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from '../../../shared/vectorIcons';
import {wp} from '../../../utils/dimensionUtils/dimensions';
import {ImgsPath} from '../../images/ImagesPath';

export const OptionsData = [
  {id: '1', title: 'Trending'},
  {id: '2', title: 'Popular'},
  {id: '3', title: 'Animals'},
  {id: '4', title: 'Nature'},
  {id: '5', title: 'Ocean'},
  {id: '6', title: 'Tigers'},
  {id: '7', title: 'Pears'},
  {id: '8', title: 'Recents'},
];

export const MoreList = [
  {
    icon: <Entypo name="grid" size={wp('6.5')} color={COLORS?.black} />,
    name: 'More Apps',
  },
  {
    icon: <Entypo name="star" size={wp('6.5')} color={COLORS?.black} />,
    name: 'Rate Us',
  },
  {
    icon: <Entypo name="share" size={wp('6.5')} color={COLORS?.black} />,
    name: 'Share',
  },
  {
    icon: <FontAwesome name="phone" size={wp('6.5')} color={COLORS?.black} />,
    name: 'Contact Us',
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="email"
        size={wp('6.5')}
        color={COLORS?.black}
      />
    ),
    name: 'Email',
  },
];

export const MoreAppsList = [
  {
    appIcon: ImgsPath?.LearnRN,
    url: 'https://play.google.com/store/apps/details?id=com.learn.ReactNative',
    name: 'LearnRN',
  },
  {
    appIcon: ImgsPath?.QuoteWell,
    url: 'https://play.google.com/store/apps/details?id=com.quotewell',
    name: 'QuoteWell',
  },
];

export const phoneNumber = '+923066447644';
export const email = 'manaffayyaz4@gmail.com';
