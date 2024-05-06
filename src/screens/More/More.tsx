import React from 'react';
import {FlatList, Linking, TouchableOpacity, View} from 'react-native';

import style from './Styles';
import HorizontalView from '../../components/HorizontalView/HorizontalView';
import {hp} from '../../utils/dimensionUtils/dimensions';
import {Text15, Text18, Text24} from '../../components/Text/Text';
import {MoreList} from '../../assets/data/StaticData/StaticData';
import {navigate} from '../../navigation/rootNavigation';
import {AppIcons} from '../../assets/data/AppIconData/AppIconData';

const PhoneEmailComp = ({icon, name, onPress, content}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1}>
      <HorizontalView style={style.card}>
        <HorizontalView>
          {icon}
          <Text18 textStyle={[style.text]}>{name}</Text18>
        </HorizontalView>

        <Text15 textStyle={style.text}>{content}</Text15>
      </HorizontalView>
    </TouchableOpacity>
  );
};

const renderItem = ({item}) => {
  const onPress = () => {
    if (item?.name == 'More Apps') {
      navigate('MoreApps');
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

const More = () => {
  const {phoneIcon, emailIcon} = AppIcons();

  const phoneNumber = '+923066447644';
  const email = 'manaffayyaz4@gmail.com';

  const handlePhonePress = async () => {
    const phoneNumberUrl = `tel:${phoneNumber}`;
    await Linking.openURL(phoneNumberUrl);
  };
  const handleEmailPress = async () => {
    const mail = `mailto:${email}`;
    await Linking.openURL(mail);
  };

  return (
    <View style={style.container}>
      <View style={style?.InnerContainer}>
        <Text24 textStyle={style?.Heading}>HD Wallpapers</Text24>
        <FlatList
          data={MoreList}
          renderItem={renderItem}
          ListFooterComponent={
            <>
              <View style={{marginTop: hp('10')}}>
                <PhoneEmailComp
                  icon={phoneIcon}
                  name="Phone"
                  onPress={handlePhonePress}
                  content={phoneNumber}
                />
                <PhoneEmailComp
                  icon={emailIcon}
                  name="Email"
                  onPress={handleEmailPress}
                  content={email}
                />
              </View>
            </>
          }
        />
      </View>
    </View>
  );
};

export default More;
