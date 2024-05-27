import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {Text, TodayScroll} from '../components';
import CircleTemp from '../components/CircleTemp';
import {useRouter} from '../hooks';
import {WeatherDetails} from '../components';

export default function HomeScreen() {
  const date = new Date();
  const router = useRouter();

  return (
    <View className="w-full h-full mt-4">
      <View className="flex-col items-center w-full h-16 justify-end">
        <Text className="font-extrabold text-lg">Today</Text>
        <Text className="mt-2">{`${date.toLocaleString('en-US', {
          weekday: 'long',
        })} ${date.toLocaleString('en-US', {
          month: 'long',
        })} ${date.getDate()}`}</Text>
      </View>
      <View className="my-5 mx-3 bg-[#1C2333] rounded-2xl items-center overflow-hidden flex-1 justify-evenly">
        <Image
          className="h-28 w-28"
          source={require('../assets/cloudy_sunny.png')}
        />
        <Text className="text-lg">Mostly Cloudy</Text>
        <View className="relative h-10">
          <Text className="text-4xl">25</Text>
          <View className="absolute -right-6">
            <CircleTemp />
          </View>
        </View>
        <View className="flex-row gap-2">
          <Text>H:27</Text>
          <Text>L:18</Text>
        </View>
        {/* <View className="flex-row gap-x-10">
          <View className="justify-center items-center">
            <Image
              className="h-14 w-10 object-contain mb-2"
              source={require('../assets/umbrella.png')}
            />
            <Text>22%</Text>
            <Text>Rain</Text>
          </View>

          <View className="justify-center items-center">
            <Image
              className="h-14 w-14 mb-2"
              source={require('../assets/wind.png')}
            />
            <Text>10 km/h</Text>
            <Text>Wind speed</Text>
          </View>
          <View className="justify-center items-center">
            <Image
              className="h-14 w-10 object-cover mb-2"
              source={require('../assets/humidity.png')}
            />
            <Text>18%</Text>
            <Text>Humidity</Text>
          </View>
        </View> */}
        <WeatherDetails rain={22} windSpeed={10} humidity={18} />
      </View>
      <View className="h-64 mx-3">
        <View className="flex-row justify-between items-center">
          <Text color="yellow" className="font-extrabold text-lg">
            Today
          </Text>
          <TouchableOpacity onPress={() => router.replace('Latest')}>
            <Text className="font-bold">{'Next 7 Day>'}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-8 mt-6 w-full">
          <TodayScroll
            hour="7 am"
            temp={23}
            image={require('../assets/storm.png')}
          />
          <TodayScroll
            hour="8 am"
            temp={23}
            image={require('../assets/sun.png')}
          />
          <TodayScroll
            hour="9 am"
            temp={24}
            image={require('../assets/cloudy.png')}
          />
          <TodayScroll
            hour="10 am"
            temp={-8}
            image={require('../assets/snowy.png')}
          />
          <TodayScroll
            hour="11 am"
            temp={23}
            image={require('../assets/rainy.png')}
          />
        </ScrollView>
      </View>
    </View>
  );
}
