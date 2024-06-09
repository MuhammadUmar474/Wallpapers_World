import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';

import {COLORS} from '../../shared/theme';
import {Text15, Text24} from '../../components/Text/Text';
import {hp, wp} from '../../utils/dimensionUtils/dimensions';
import {AppIcons} from '../../assets/data/AppIconData/AppIconData';
import {OptionsData} from '../../assets/data/StaticData/StaticData';
import style from './Styles';
import Chip from '../../components/Chip/Chip';
import WallpaperComp from '../../components/WallpaperComp/WallpaperComp';
import HorizontalView from '../../components/HorizontalView/HorizontalView';
import SearchComp from '../../components/SearchComp/SearchComp';
import AppContext from '../../context/AppContext';
import Loader from '../../components/Loader/Loader';
import EmptyComp from '../../components/EmptyComp/EmptyComp';

// android app open ad id : ca-app-pub-2587642180140061/4310559647
// ios app open ad id : ca-app-pub-2587642180140061/9699699261

const Home = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Trending');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchItem, setSearchItem] = useState('');
  const [isLightMode, setIsLightMode] = useState(true);
  const [wallPapers, setWallpapers] = useState([]);
  const {updateColor, selectedColor} = useContext(AppContext);
  const {sunIcon, moonIcon} = AppIcons();

  const onThemePress = () => {
    setIsLightMode(!isLightMode);
    updateColor(isLightMode);
  };

  const handleOption = (title: string) => {
    setSelectedItem(title);
    setCurrentPage(1);
    setWallpapers([]);
    setSearchItem('');
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
    // setPagination(true);
  };

  const onSearchSubmit = () => {
    setIsLoading(true);
    setWallpapers([]);
    setCurrentPage(1);
    fetchPhotos(
      searchItem?.length > 0 ? searchItem : selectedItem,
      currentPage,
    );
  };

  const fetchPhotos = async (selectedItem: string, currentPage: number) => {
    try {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${selectedItem}&page=${currentPage}&per_page=20`,
        {
          headers: {
            Authorization:
              'N6enQR1aVguXWrIzzc3X05LsdW51Yaeu8PAuAu32lns2e4aWc3nWKrYQ',
          },
        },
      );
      // @ts-ignore
      setWallpapers((prevWallpapers: any[]) => {
        return [...(prevWallpapers ?? []), ...(res?.data?.photos ?? [])];
      });
      setIsLoading(false);
      // console.log('fetchPhotos', res?.data);
    } catch (err) {
      console.log('Error while getting WallPapers ==> ', err);
    }
  };

  useEffect(() => {
    if (selectedItem != 'Trending') {
      setIsLoading(true);
    }
  }, [selectedItem]);

  useEffect(() => {
    fetchPhotos(selectedItem, currentPage);
  }, [selectedItem, currentPage]);

  return (
    <View style={style.container}>
      <View
        style={{
          height: hp('100'),
          backgroundColor: selectedColor ? COLORS.primary : COLORS?.white,
        }}>
        <View style={{marginTop: hp('6'), marginHorizontal: wp('4')}}>
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
        </View>
        <View style={{marginHorizontal: wp('4')}}>
          {isLoading ? (
            <Loader />
          ) : wallPapers?.length > 0 ? (
            <FlatList
              style={{marginTop: hp('2')}}
              data={wallPapers}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => (
                <WallpaperComp item={item} index={index} />
              )}
              onEndReachedThreshold={0.4}
              onEndReached={loadMoreItem}
            />
          ) : (
            <EmptyComp />
          )}
        </View>
      </View>
    </View>
  );
};

export default Home;
