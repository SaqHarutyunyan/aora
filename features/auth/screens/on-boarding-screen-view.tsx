import { View, Text, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function OnBoardingScreenView() {
    return (
        <View>
            <Pressable
                onPress={() => router.navigate("/(unauthenticated)/sign-up")}
            >
                <Text className="bg-primary text-red-700">Sing up</Text>
            </Pressable>
            <Pressable
                onPress={() => router.navigate("/(unauthenticated)/sign-in")}
            >
                <Text>Sing in</Text>
            </Pressable>
        </View>
    );
}
