import React, {useState} from 'react';
import {FlatList, View} from 'react-native';

import {COLORS} from '../../shared/theme';
import {Text24} from '../../components/Text/Text';
import {hp, wp} from '../../utils/dimensionUtils/dimensions';
import {OptionsData} from '../../assets/data/StaticData/StaticData';
import style from './Styles';
import Chip from '../../components/Chip/Chip';
import WallpaperComp from '../../components/WallpaperComp/WallpaperComp';
import HorizontalView from '../../components/HorizontalView/HorizontalView';
import {navigate} from '../../navigation/rootNavigation';
import {ImgsPath} from '../../assets/images/ImagesPath';
import SearchComp from '../../components/SearchComp/SearchComp';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Recents');
  const [searchItem, setSearchItem] = useState('');

  const handleOption = (title: string) => {
    setSelectedItem(title);
  };

  const onSearchSubmit = () => {};

  return (
    <View style={style.container}>
      <View style={{height: hp('100'), backgroundColor: COLORS.primary}}>
        <View style={{marginTop: hp('6'), marginHorizontal: wp('5')}}>
          <HorizontalView>
            <Text24 textStyle={{color: COLORS.white}}>HD Wallpapers</Text24>
          </HorizontalView>

          <SearchComp
            value={searchItem}
            onChangeText={setSearchItem}
            onSubmitEditing={onSearchSubmit}
          />
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

          <FlatList
            style={{marginTop: hp('2')}}
            data={[{}, {}, {}, {}]}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <WallpaperComp
                selectedItem={selectedItem}
                onPress={() =>
                  navigate('Preview', {uri: ImgsPath.exploreBackGround})
                }
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
