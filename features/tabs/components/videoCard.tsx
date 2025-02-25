import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";

interface VideoCardProps {
    video: {
        title: string;
        thumbnail: string;
        video: string;
        creator: {
            username: string;
            avatar: string;
        };
    };
}

const VideoCard: React.FC<VideoCardProps> = ({
    video: {
        title,
        thumbnail,
        video,
        creator: { username, avatar },
    },
}) => {
    const [play, setPlay] = useState(false);
    return (
        <View className="flex-col items-center px-4 mb-14">
            <View className="flex-row gap-3 items-start">
                <View className="justify-center items-center flex-row flex-1">
                    <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center">
                        <Image
                            source={{
                                uri: avatar || "https://via.placeholder.com/46",
                            }}
                            resizeMode="contain"
                            className="w-full h-full rounded-lg"
                        />
                    </View>
                    <View className="justify-center flex-1 ml-3 gap-y-1">
                        <Text
                            className="text-sm font-psemibold text-white"
                            numberOfLines={1}
                        >
                            {title}
                        </Text>
                        <Text
                            className="text-xs font-pregular text-gray-100"
                            numberOfLines={1}
                        >
                            {username}
                        </Text>
                    </View>
                    <View className="pt-2">
                        <Image
                            source={icons.menu}
                            resizeMode="contain"
                            className="w-5 h-5"
                        />
                    </View>
                </View>
            </View>
            {play ? (
                <Text>Playing</Text>
            ) : (
                <TouchableOpacity
                    activeOpacity={0.7}
                    className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
                    onPress={() => setPlay(true)}
                >
                    <Image
                        source={{
                            uri: thumbnail,
                        }}
                        resizeMode="cover"
                        className="w-full h-full mt-3 rounded-xl"
                    />
                    <Image
                        source={icons.play}
                        resizeMode="contain"
                        className="w-12 h-12 absolute"
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default VideoCard;
