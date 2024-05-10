import React, { useContext } from 'react';
import { FlatList, ImageBackground, Linking, TouchableOpacity, View } from 'react-native';

import style from './Styles';
import { Text18, Text24 } from '../../components/Text/Text';
import { MoreList, email, phoneNumber } from '../../assets/data/StaticData/StaticData';
import { navigate } from '../../navigation/rootNavigation';
import { ImgsPath } from '../../assets/images/ImagesPath';
import AppContext from '../../context/AppContext';

interface RenderItemProps {
  item: { name: string; icon: React.ReactNode };

}

const renderItem: React.FC<RenderItemProps> = ({ item }) => {
  const handlePhonePress = async () => {
    const phoneNumberUrl = `tel:${phoneNumber}`;
    await Linking.openURL(phoneNumberUrl);
  };

  const handleEmailPress = async () => {
    const mail = `mailto:${email}`;
    await Linking.openURL(mail);
  };

  const onPress = () => {
    if (item?.name === 'More Apps') {
      navigate('MoreApps');
    } else if (item?.name === 'Contact Us') {
      handlePhonePress();
    } else if (item?.name === 'Email') {
      handleEmailPress();
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style?.listItem}>
        <View style={style?.IconContainer}>{item?.icon}</View>
        <Text18 textStyle={style?.listText}>{item?.name}</Text18>
      </View>
    </TouchableOpacity>
  );
};

const More: React.FC = () => {
  const { selectedColor } = useContext(AppContext);
  return (
    <View style={style.container}>
      <ImageBackground
        source={ImgsPath.exploreBackGround}
        resizeMode="cover"
        style={style.backGroundImg}
      >
        <View style={style?.Container2(selectedColor)}>
          <Text24 textStyle={style?.Heading}>HD Wallpapers</Text24>
          <FlatList data={MoreList} renderItem={renderItem} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default More;
