import React, {useContext, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';

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
import {AppIcons} from '../../assets/data/AppIconData/AppIconData';
import AppContext from '../../context/AppContext';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Recents');
  const [searchItem, setSearchItem] = useState('');
  const [isLightMode, setIsLightMode] = useState(true);
  const {updateColor, selectedColor} = useContext(AppContext);
  const {sunIcon, moonIcon} = AppIcons();

  const onThemePress = () => {
    setIsLightMode(!isLightMode);
    updateColor(isLightMode);
  };

  const handleOption = (title: string) => {
    setSelectedItem(title);
  };

  const onSearchSubmit = () => {};

  return (
    <View style={style.container}>
      <View
        style={{
          height: hp('100'),
          backgroundColor: selectedColor ? COLORS.primary : COLORS?.white,
        }}>
        <View style={{marginTop: hp('6'), marginHorizontal: wp('5')}}>
          <HorizontalView>
            <Text24
              textStyle={{
                color: selectedColor ? COLORS.white : COLORS?.primary,
              }}>
              HD Wallpapers
            </Text24>
            <TouchableOpacity onPress={onThemePress}>
              {isLightMode ? sunIcon : moonIcon}
            </TouchableOpacity>
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
