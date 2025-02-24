import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../../constants";
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";
import { createUser } from "@/lib/appwrite";

export default function SignUpScreenView() {
    const [form, setform] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [isSubmitting, setisSubmitting] = useState(false);
    const submit = async () => {
        if (!form.username || !form.password || !form.email) {
            Alert.alert("Error", "Please fill in the all the fields");
        }
        setisSubmitting(true);
        try {
            const result = await createUser(
                form.email,
                form.password,
                form.username
            );
            Alert.alert("Success", "User created successfully");
            router.navigate("/(tabs)/home");
        } catch (error) {
            if (error instanceof Error) {
                Alert.alert("Error", error.message);
            } else {
                Alert.alert("Error", "An unexpected error occurred");
            }
        } finally {
            setisSubmitting(false);
        }
    };
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full min-h-[80vh] justify-center px-4 my-6">
                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        className="w-[115px] h-[35px]"
                    />
                    <Text className="text-white mt-10 text-2xl font-psemibold">
                        Sign up to Aora
                    </Text>
                    <FormField
                        title="Username"
                        value={form.username}
                        handelChangeText={(e) =>
                            setform({ ...form, username: e })
                        }
                        otherStyles="mt-10"
                    />
                    <FormField
                        title="Email"
                        value={form.email}
                        handelChangeText={(e) => setform({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Password"
                        value={form.password}
                        handelChangeText={(e) =>
                            setform({ ...form, password: e })
                        }
                        otherStyles="mt-7"
                    />
                    <CustomButton
                        title="Sign up"
                        handelPrees={submit}
                        containerStyle="mt-7"
                        isLoading={isSubmitting}
                    />
                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className="text-gray-100 text-lg font-pregular">
                            Already have an account?{" "}
                            <Text
                                onPress={() =>
                                    router.navigate(
                                        "/(unauthenticated)/sign-in"
                                    )
                                }
                                className="text-secondary text-lg font-pregular"
                            >
                                Sign in
                            </Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
