import { View, Text, ScrollView, Image, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../../constants";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";
export default function OnBoardingScreenView() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className="w-full h-full items-center justify-center px-4">
                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        className="w-[130px] h-[84px]"
                    />
                    <Image
                        source={images.cards}
                        resizeMode="contain"
                        className="max-w--[380px] w-full h-[300px]"
                    />
                    <View className="relative mt-5">
                        <Text className="text-white text-4xl font-bold text-center">
                            Discover Endless Possibilities with{" "}
                            <Text className="text-secondary-200 ml-4">
                                Aora
                            </Text>
                        </Text>
                        <Image
                            source={images.path}
                            resizeMode="contain"
                            className="w-[136px] h-[15px] absolute -right-8 -bottom-2"
                        />
                    </View>
                    <Text className="text-sm font-pregular text-[#CDCDE0] text-center mt-7">
                        Where Creativity Meets Innovation: Embark on a Journey
                        of Limitless Exploration with Aora
                    </Text>
                    <CustomButton
                        title="Continue with email"
                        handelPrees={() =>
                            router.navigate("/(unauthenticated)/sign-in")
                        }
                        containerStyle="w-full mt-7"
                    />
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#161622" />
        </SafeAreaView>
    );
}
