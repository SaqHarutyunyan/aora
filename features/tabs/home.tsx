import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import SearchInput from "../auth/components/SearchInput";
import Trending from "../auth/components/Trending";
import EmptyState from "../auth/components/EmptyState";

const HomeScreen = () => {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = async () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };
    return (
        <SafeAreaView className="bg-primary h-full">
            <FlatList
                data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <Text className="text-white  text-3xl font-pregular">
                            {item.id}
                        </Text>
                    );
                }}
                ListHeaderComponent={() => (
                    <View className="my-6 px-4 space-y-6">
                        <View className="justify-between items-start flex-row mb-6">
                            <View>
                                <Text className="text-gray-100 text-sm font-pmedium">
                                    Welcome back
                                </Text>
                                <Text className="text-2xl font-psemibold text-white">
                                    Thuggin
                                </Text>
                            </View>
                            <View className="mt-1.5">
                                <Image
                                    source={images.logoSmall}
                                    className="w-9 h-10"
                                    resizeMode="contain"
                                />
                            </View>
                        </View>
                        <SearchInput handelChangeText={() => {}} />
                        <View className="w-full flex-1 pt-5 pb-8">
                            <Text className="text-gray-100 text-lg font-pregular mb-3">
                                Trending Videos
                            </Text>
                            <Trending
                                posts={[{ id: 1 }, { id: 2 }, { id: 3 }]}
                            />
                        </View>
                    </View>
                )}
                ListEmptyComponent={() => {
                    return (
                        <EmptyState
                            title="No videos found"
                            subTitle="Be the first one the upload a video "
                        />
                    );
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
