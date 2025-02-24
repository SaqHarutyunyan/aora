import React from "react";
import { Redirect, Stack } from "expo-router";
import { useGlobalContext } from "@/context/GlobalProvider";

export default function AuthLayout() {
    const { isLoading, isLoggedIn } = useGlobalContext();
    if (isLoading && !isLoggedIn) return <Redirect href={"/(tabs)/home"} />;
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="sign-in" options={{ headerShown: false }} />
            <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        </Stack>
    );
}
