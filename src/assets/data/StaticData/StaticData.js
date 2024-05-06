import {COLORS} from '../../../shared/theme';
import {Entypo} from '../../../shared/vectorIcons';
import {wp} from '../../../utils/dimensionUtils/dimensions';
import {ImgsPath} from '../../images/ImagesPath';

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
