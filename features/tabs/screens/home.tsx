import {
    View,
    Text,
    FlatList,
    Image,
    RefreshControl,
    Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import SearchInput from "@/features/auth/components/SearchInput";
import Trending from "@/features/auth/components/Trending";
import EmptyState from "@/features/auth/components/EmptyState";
import { getAllPosts, getLatestPost } from "@/lib/appwrite";
import useAppwrite from "@/common/hooks/useAppwrite";
import VideoCard from "../components/videoCard";

const HomeScreen = () => {
    const { data: posts, refeatch } = useAppwrite(getAllPosts);
    const { data: latestPost } = useAppwrite(getLatestPost);

    const [refreshing, setRefreshing] = useState(false);
    console.log(posts);
    const onRefresh = async () => {
        setRefreshing(true);
        await refeatch();
        setRefreshing(false);
    };
    return (
        <SafeAreaView className="bg-primary h-full">
            <FlatList
                data={posts}
                keyExtractor={(item) => item.$id.toString()}
                renderItem={({ item }) => {
                    return <VideoCard video={item} />;
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
                            <Trending posts={latestPost} />
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
