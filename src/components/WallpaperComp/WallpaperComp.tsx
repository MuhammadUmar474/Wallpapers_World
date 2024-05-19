import React, {memo, useCallback, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useFocusEffect} from '@react-navigation/native';

import styles from './styles';
import {COLORS} from '../../shared/theme';
import {FontAwesome} from '../../shared/vectorIcons';
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
}

const WallpaperComp: React.FC<WallpaperCompProps> = ({item}) => {
  const [liked, setLiked] = useState(false);

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
    <TouchableOpacity style={styles.container} onPress={onWallPaperPress}>
      <FastImage
        source={{
          uri: item?.src?.medium,
        }}
        style={styles.imgStyle}
      />
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
