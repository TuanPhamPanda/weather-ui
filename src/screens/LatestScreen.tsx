/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Image, View} from 'react-native';
import {ButtonBack, Text} from '../components';
import {useRouter} from '../hooks';
import CircleTemp from '../components/CircleTemp';
import WeatherDetails from '../components/WeatherDetails';
import WeatherForecast from '../components/WeatherForecast';
import {ScrollView} from 'react-native-gesture-handler';

const {height} = Dimensions.get('screen');

export default function LatestScreen() {
  const navigation = useRouter();
  return (
    <View className="mx-4">
      <ButtonBack onPress={() => navigation.replace('Home')} />
      <View
        style={{height: height - (height * 2) / 3}}
        className="bg-[#1C2333]">
        <View
          className="justify-center"
          style={{flexGrow: 2, flexShrink: 1, flexBasis: 0}}>
          <View className="flex-row justify-between mx-8">
            <Image
              className="h-24 w-24 ml-4"
              source={require('../assets/snowy.png')}
            />
            <View className="gap-y-2 mr-4">
              <Text className="text-lg">Tomorrow</Text>
              <View className="relative w-fit">
                <Text className="text-3xl">25</Text>
                <View className="absolute right-16 top-1">
                  <CircleTemp size={12} holeSize={8} />
                </View>
              </View>
              <Text className="text-lg">Mostly Cloudy</Text>
            </View>
          </View>
        </View>
        <View className="flex-1 items-center justify-center">
          <WeatherDetails rain={22} windSpeed={10} humidity={18} />
        </View>
      </View>
      <View style={{height: height - (height * 1) / 3}} className="mt-4">
        <ScrollView
          // contentContainerStyle={{marginBottom: 10}}
          showsVerticalScrollIndicator={false}>
          <WeatherForecast
            datetime="Sat"
            icon={require('../assets/storm.png')}
            title="Storm"
            minTemp={7}
            maxTemp={20}
          />
          <WeatherForecast
            datetime="Sun"
            icon={require('../assets/cloudy.png')}
            title="Cloudy"
            minTemp={7}
            maxTemp={20}
          />
          <WeatherForecast
            datetime="Mon"
            icon={require('../assets/rainy_sunny.png')}
            title="Rainy Sunny"
            minTemp={7}
            maxTemp={20}
          />
          <WeatherForecast
            datetime="Tus"
            icon={require('../assets/cloudy_sunny.png')}
            title="Cloudy Sunny"
            minTemp={7}
            maxTemp={20}
          />
          <WeatherForecast
            datetime="Wen"
            icon={require('../assets/sun.png')}
            title="Sunny"
            minTemp={7}
            maxTemp={20}
          />
          <WeatherForecast
            datetime="Thu"
            icon={require('../assets/rainy.png')}
            title="Rainy"
            minTemp={7}
            maxTemp={20}
          />
          <WeatherForecast
            datetime="Fri"
            icon={require('../assets/sun.png')}
            title="Sunny"
            minTemp={7}
            maxTemp={20}
          />
        </ScrollView>
      </View>
    </View>
  );
}
