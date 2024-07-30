import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";

interface NewButtonProps {
  onPress: () => void;
  title: string;
  textStyles?: string;
  containerStyles?: string;
}

const NewButton = ({
  onPress,
  title,
  textStyles = "",
  containerStyles = "",
}: NewButtonProps) => {
  return (
    
      <TouchableOpacity
        activeOpacity={0.7}
        className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
        onPress={onPress}
      >
        <Text className={`font-semibold text-lg ${textStyles}`}>{title}</Text>
      </TouchableOpacity>
    
  );
};

export default NewButton;
