import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface CustomButtonProps {
    title: string;
    handelPrees?: () => void;
    disabled?: boolean;
    containerStyle?: string;
    textStyle?: string;
    isLoading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    handelPrees,
    containerStyle,
    textStyle,
    isLoading,
}) => {
    return (
        <TouchableOpacity
            onPress={handelPrees}
            activeOpacity={0.7}
            className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${
                isLoading ? "opacity-50" : " "
            }`}
            disabled={isLoading}
        >
            <Text
                className={`text-primary font-psemibold text-lg ${textStyle}`}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
