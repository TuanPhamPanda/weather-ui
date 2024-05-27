import React from 'react';
import {Image, View} from 'react-native';
import Text from './Text';

interface WeatherDetailsProps {
  windSpeed: number;
  humidity: number;
  rain: number;
}

export default function WeatherDetails({
  humidity,
  rain,
  windSpeed,
}: WeatherDetailsProps) {
  return (
    <View className="flex-row gap-x-10">
      <View className="justify-center items-center">
        <Image
          className="h-8 w-6 object-contain mb-2"
          source={require('../assets/umbrella.png')}
        />
        <Text>{`${rain} %`}</Text>
        <Text>Rain</Text>
      </View>

      <View className="justify-center items-center">
        <Image
          className="h-8 w-8 mb-2 object-cover"
          source={require('../assets/wind.png')}
        />
        <Text>{`${windSpeed} km/h`}</Text>
        <Text>Wind speed</Text>
      </View>
      <View className="justify-center items-center">
        <Image
          className="h-8 w-6 object-cover mb-2"
          source={require('../assets/humidity.png')}
        />
        <Text>{`${humidity} %`}</Text>
        <Text>Humidity</Text>
      </View>
    </View>
  );
}
