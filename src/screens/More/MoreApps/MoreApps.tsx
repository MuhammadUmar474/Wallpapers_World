import React from 'react';
import {FlatList, Image, Linking, TouchableOpacity, View} from 'react-native';

import style from './Styles';
import { hp, wp } from '../../../utils/dimensionUtils/dimensions';
import { Text18, Text24 } from '../../../components/Text/Text';
import { COLORS } from '../../../shared/theme';
import { MoreAppsList } from '../../../assets/data/StaticData/StaticData';



const MoreApps = () => {

  const onPress=(item:any)=>{
      Linking?.openURL(item?.url)
  }

  const renderItem = ({item})=>{
    return(
        <TouchableOpacity onPress={()=>{onPress(item)}}>
      <View style={style?.listItem}>
        <Image source={item?.appIcon} style={style?.listImg}/>
        <Text18 textStyle={style?.listText}>{item?.name}</Text18>
      </View>
    </TouchableOpacity>
    )
  }
  return (
    <View style={style.container}>
        <View style={style?.InnerContainer}>

            <Text24 textStyle={style?.Heading}>Our More Apps</Text24>
            <FlatList  data={MoreAppsList} renderItem={renderItem}/>
        </View>
      </View>
  );
};

export default MoreApps;
