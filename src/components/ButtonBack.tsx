import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

interface ButtonBackProps {
  onPress: () => void;
}

export default function ButtonBack({onPress}: ButtonBackProps) {
  return (
    <TouchableOpacity onPress={onPress} className="py-4 w-fit">
      <Image source={require('../assets/icon-back.png')} />
    </TouchableOpacity>
  );
}
