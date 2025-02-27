import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@/constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

interface EmptyStateProps {
    title: string;
    subTitle: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, subTitle }) => {
    return (
        <View className="justify-center items-center px-4">
            <Image
                source={images.empty}
                className="w-[270px] h-[215px]"
                resizeMode="contain"
            />
            <Text className="text-white mt-2 text-xl font-psemibold">
                {title}
            </Text>
            <Text className="text-gray-100 text-sm font-pmedium">
                {subTitle}
            </Text>
            <CustomButton
                title="Create Video"
                handelPrees={() => router.navigate("/(tabs)/create")}
                containerStyle="w-full my-5"
            />
        </View>
    );
};

export default EmptyState;
