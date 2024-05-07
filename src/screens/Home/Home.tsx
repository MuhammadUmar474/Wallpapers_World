import React, {useState} from 'react';
import {FlatList, View} from 'react-native';

import style from './Styles';
import {hp, wp} from '../../utils/dimensionUtils/dimensions';
import {COLORS} from '../../shared/theme';
import HorizontalView from '../../components/HorizontalView/HorizontalView';
import {Text24} from '../../components/Text/Text';
import Chip from '../../components/Chip/Chip';
import {OptionsData} from '../../assets/data/StaticData/StaticData';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Recents');

  const handleOption = (title: string) => {
    setSelectedItem(title);
  };
  return (
    <View style={style.container}>
      <View style={{height: hp('100'), backgroundColor: COLORS.primary}}>
        <View style={{marginTop: hp('6'), marginHorizontal: wp('5')}}>
          <HorizontalView>
            <Text24 textStyle={{color: COLORS.white}}>HD Wallpapers</Text24>
          </HorizontalView>

          <FlatList
            style={{marginTop: hp('2')}}
            data={OptionsData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Chip
                title={item?.title}
                selectedItem={selectedItem}
                onPress={() => handleOption(item.title)}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
