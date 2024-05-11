import React, {useContext} from 'react';
import {FlatList, Image, Linking, TouchableOpacity, View} from 'react-native';

import style from './Styles';
import {Text18, Text24} from '../../../components/Text/Text';
import {MoreAppsList} from '../../../assets/data/StaticData/StaticData';
import AppContext from '../../../context/AppContext';

interface MoreAppsProps {
  selectedColor: boolean;
  listText: object;
}

const MoreApps: React.FC<MoreAppsProps> = () => {
  const {selectedColor} = useContext(AppContext);
  const onPress = (item: any) => {
    Linking?.openURL(item?.url);
  };

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPress(item);
        }}>
        <View style={style?.listItem}>
          <Image source={item?.appIcon} style={style?.listImg} />
          <Text18 textStyle={style?.listText(selectedColor)}>
            {item?.name}
          </Text18>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={style.container(selectedColor)}>
      <View style={style?.InnerContainer}>
        <Text24 textStyle={style?.Heading(selectedColor)}>Our More Apps</Text24>
        <FlatList data={MoreAppsList} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default MoreApps;
