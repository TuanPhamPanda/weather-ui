import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import Text from './Text';
import CircleTemp from './CircleTemp';

interface TodayScrollProps {
  hour: string;
  temp: number;
  image: ImageSourcePropType;
}

export default function TodayScroll({image, temp, hour}: TodayScrollProps) {
  return (
    <View className="flex-col bg-[#1C2333] h-full py-3 px-5 justify-evenly rounded-xl mx-2">
      <Text>{hour}</Text>
      <Image className="w-8 h-8" source={image} />
      <View className="relative items-center">
        <Text>{temp}</Text>
        <View
          className={`absolute ${
            Math.abs(temp) >= 10 ? '-right-1' : 'right-0'
          }`}>
          <CircleTemp holeSize={6} size={8} />
        </View>
      </View>
    </View>
  );
}
