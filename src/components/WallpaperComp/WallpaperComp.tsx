import React, {memo, useCallback, useEffect, useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useFocusEffect} from '@react-navigation/native';
import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';

import styles from './styles';
import {COLORS} from '../../shared/theme';
import {Feather, FontAwesome} from '../../shared/vectorIcons';
import {navigate} from '../../navigation/rootNavigation';
import {
  getItemFromAsyncStorage,
  saveItemInAsyncStorage,
} from '../../utils/storage/asyncStorage';

interface WallpaperItem {
  id: string;
  src: {
    original: string;
    medium: string;
  };
  liked?: boolean;
}

interface WallpaperCompProps {
  item: WallpaperItem;
  index: number;
}

const rewardAdId = TestIds.REWARDED;

const rewarded = RewardedAd.createForAdRequest(rewardAdId);

const WallpaperComp: React.FC<WallpaperCompProps> = ({item, index}) => {
  let mod = index / 11;

  const [liked, setLiked] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        setLoaded(true);
      },
    );
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      () => {
        navigate('Preview', {uri: item?.src?.original});
      },
    );
    rewarded.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);

  const onRewardPress = () => {
    if (loaded) {
      rewarded.show();
      setLoaded(false);
    }
  };

  const onWallPaperPress = () =>
    navigate('Preview', {uri: item?.src?.original});

  const checkLikedStatus = async () => {
    const likedItems = await getItemFromAsyncStorage('likeListItem');
    if (likedItems) {
      const parsedLikedItems: WallpaperItem[] = JSON.parse(likedItems);
      const currentItem = parsedLikedItems.find(
        likedItem => likedItem.id === item.id,
      );
      if (currentItem != undefined && Object?.keys(currentItem)?.length > 0) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      checkLikedStatus();
    }, [item]),
  );

  const likeIconPress = async (items: WallpaperItem) => {
    let likedItems = await getItemFromAsyncStorage('likeListItem');
    if (likedItems) {
      const parsedLikedItems: WallpaperItem[] = JSON.parse(likedItems);
      const updatedData = parsedLikedItems.find(
        likedItem => likedItem.id === items.id,
      )
        ? parsedLikedItems.filter(likedItem => likedItem.id !== items.id)
        : [...parsedLikedItems, items];
      await saveItemInAsyncStorage('likeListItem', JSON.stringify(updatedData));
      setLiked(!liked);
    } else {
      const newItemArray: WallpaperItem[] = [items];
      await saveItemInAsyncStorage(
        'likeListItem',
        JSON.stringify(newItemArray),
      );
      setLiked(true);
    }
  };

  return (
    <TouchableOpacity
      disabled={Number.isInteger(mod) ? true : false}
      style={styles.container}
      onPress={onWallPaperPress}>
      <Image
        blurRadius={Number.isInteger(mod) ? 10 : 0}
        source={{
          uri: item?.src?.medium,
        }}
        style={styles.imgStyle}
      />
      {loaded && Number.isInteger(mod) ? (
        <TouchableOpacity
          onPress={onRewardPress}
          style={{
            ...styles.rewardStyle,
          }}>
          <Feather
            name={'gift'}
            size={25}
            color={liked ? COLORS.red : COLORS.white}
          />
        </TouchableOpacity>
      ) : null}

      <TouchableOpacity
        onPress={() => likeIconPress(item)}
        style={{
          ...styles.likeStyle,
          backgroundColor: false ? COLORS.red : COLORS.transparent,
          borderWidth: false ? 0 : 1,
        }}>
        <FontAwesome
          name={'heart'}
          size={20}
          color={liked ? COLORS.red : COLORS.white}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default memo(WallpaperComp);
