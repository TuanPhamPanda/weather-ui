import React from 'react';
import {Text, TextProps} from 'react-native';

interface CustomTextProps extends TextProps {
  color?: string;
  className?: string;
}

export default function CustomText({
  color = '#fff',
  children,
  style,
  className,
  ...props
}: CustomTextProps) {
  return (
    <Text className={className} style={[{color}, style]} {...props}>
      {children}
    </Text>
  );
}
