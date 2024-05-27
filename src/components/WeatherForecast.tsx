import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import Text from './Text';
import CircleTemp from './CircleTemp';

interface WeatherForecastProps {
  datetime: string;
  icon: ImageSourcePropType;
  title: string;
  minTemp: number;
  maxTemp: number;
}

export default function WeatherForecast({
  datetime,
  icon,
  title,
  maxTemp,
  minTemp,
}: WeatherForecastProps) {
  return (
    <View className="flex-row items-center justify-around py-2 px-1">
      <Text>{datetime}</Text>
      <Image className="h-10 w-10" source={icon} />
      <Text>{title}</Text>
      <View className="relative">
        <Text>{maxTemp}</Text>
        <View className="absolute -right-2">
          <CircleTemp size={6} holeSize={3} />
        </View>
      </View>
      <View className="relative">
        <Text>{minTemp}</Text>
        <View className="absolute -right-2">
          <CircleTemp size={6} holeSize={3} />
        </View>
      </View>
    </View>
  );
}
