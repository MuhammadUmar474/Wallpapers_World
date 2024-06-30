import React, {useCallback, useContext, useState, useEffect} from 'react';
import {FlatList, TouchableOpacity, View, ListRenderItem} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {TestIds} from 'react-native-google-mobile-ads';

import style from './Styles';
import HorizontalView from '../../components/HorizontalView/HorizontalView';
import {COLORS} from '../../shared/theme';
import {hp, wp} from '../../utils/dimensionUtils/dimensions';
import {Text24} from '../../components/Text/Text';
import AppContext from '../../context/AppContext';
import {
  getItemFromAsyncStorage,
  saveItemInAsyncStorage,
} from '../../utils/storage/asyncStorage';
import {FontAwesome} from '../../shared/vectorIcons';
import {navigate} from '../../navigation/rootNavigation';
import EmptyComp from '../../components/EmptyComp/EmptyComp';
import useInterstitialAd from '../../hooks/useInterstitialAd';

interface LikedItem {
  id: string;
  src: {
    original: string;
    medium: string;
  };
}

const Likes: React.FC = () => {
  const interstitialAdId = 'ca-app-pub-2587642180140061/5858804403';
  const showInterstitialAd = useInterstitialAd(interstitialAdId, () => {
    console.log('Interstitial Ad Closed');
  });

  const [likedItems, setLikedItems] = useState<LikedItem[]>([]);
  const {selectedColor} = useContext(AppContext);

  // FETCH STORE IMAGES FROM ASYNC STORAGE
  const getLikedItemList = async () => {
    const likedItemList = await getItemFromAsyncStorage('likeListItem');
    if (likedItemList) {
      const parsedLikedItems: LikedItem[] = JSON.parse(likedItemList);
      setLikedItems(parsedLikedItems);
    }
  };

  // DISLIKE QUOTE
  const removeLikeItems = async (item: LikedItem) => {
    const filterData = likedItems.filter(items => item.id !== items.id);
    await saveItemInAsyncStorage('likeListItem', JSON.stringify(filterData));
    setLikedItems(filterData);
  };

  useFocusEffect(
    useCallback(() => {
      getLikedItemList();
    }, []),
  );

  const onWallPaperPress = (item: LikedItem) =>
    navigate('Preview', {uri: item.src.original});

  const renderItem: ListRenderItem<LikedItem> = ({item}) => (
    <TouchableOpacity
      style={style.container1}
      onPress={() => onWallPaperPress(item)}>
      <FastImage
        source={{
          uri: item.src.medium,
        }}
        style={style.imgStyle}
      />
      <TouchableOpacity
        onPress={() => {
          removeLikeItems(item);
          showInterstitialAd();
        }}
        style={{
          ...style.likeStyle,
          backgroundColor: false ? COLORS.red : COLORS.transparent,
          borderWidth: false ? 0 : 1,
        }}>
        <FontAwesome name={'heart'} size={20} color={COLORS.red} />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={style.container}>
      <View
        style={{
          height: hp('100'),
          backgroundColor: selectedColor ? COLORS.background : COLORS.white,
        }}>
        <View style={style.container2}>
          <HorizontalView>
            <Text24
              textStyle={{
                color: selectedColor ? COLORS.white : COLORS.background,
              }}>
              Liked Wallpapers
            </Text24>
          </HorizontalView>
          {likedItems?.length > 0 ? (
            <FlatList
              style={style.list}
              data={likedItems}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              onEndReachedThreshold={0.4}
            />
          ) : (
            <EmptyComp />
          )}
        </View>
      </View>
    </View>
  );
};

export default Likes;
