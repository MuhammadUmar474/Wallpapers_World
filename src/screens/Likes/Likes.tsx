import React, { useContext, useState } from 'react';
import {FlatList, View} from 'react-native';

import style from './Styles';
import HorizontalView from '../../components/HorizontalView/HorizontalView';
import {COLORS} from '../../shared/theme';
import {hp, wp} from '../../utils/dimensionUtils/dimensions';
import {Text24} from '../../components/Text/Text';
import WallpaperComp from '../../components/WallpaperComp/WallpaperComp';
import AppContext from '../../context/AppContext';

const Likes = () => {
  const [selectedItem, setSelectedItem] = useState<string>('');
  const {selectedColor} = useContext(AppContext)
  return (
    <View style={style.container}>
      <View style={{height: hp('100'), backgroundColor: selectedColor ? COLORS.background : COLORS?.white}}>
        <View style={{marginTop: hp('6'), marginHorizontal: wp('5')}}>
          <HorizontalView>
            <Text24 textStyle={{color:selectedColor ?  COLORS.white : COLORS?.background}}>HD Wallpapers</Text24>
          </HorizontalView>
          <FlatList
            style={{marginTop: hp('2')}}
            data={[{}, {}, {}, {}]}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <WallpaperComp
                selectedItem={selectedItem}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Likes;
