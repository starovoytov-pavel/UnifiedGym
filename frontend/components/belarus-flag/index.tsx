import React from "react";

import { View, Image, Text } from "react-native";

import WhiteRedWhiteFlag from 'assets/belarus_flag.png';

const BelarusFlag = () => {
  return (
    <View>
      <Image source={WhiteRedWhiteFlag} style={{ width: 50, height: 30 }} />

      <Text>Беларусь</Text>
    </View>
  );
};

export default BelarusFlag;
