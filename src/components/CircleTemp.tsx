import React from 'react';
import {View} from 'react-native';

interface CircleTempProps {
  size?: number;
  holeSize?: number;
}

export default function CircleTemp({
  size = 20,
  holeSize = 12,
}: CircleTempProps) {
  return (
    <View
      className="rounded-full bg-white justify-center items-center overflow-hidden"
      style={{height: size, width: size}}>
      <View
        className="bg-primary rounded-full"
        style={{height: holeSize, width: holeSize}}
      />
    </View>
  );
}
