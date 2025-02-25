import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    Image,
} from "react-native";
import React, { useState, useRef } from "react";
import { icons } from "@/constants";
import { Video, ResizeMode } from "expo-av";

interface Post {
    id: string;
    title?: string;
    thumbnail?: string;
    video: string;
}

interface TrendingProps {
    posts: Post[];
}

const TrendingItem: React.FC<{
    activeItem: string;
    item: Post;
    onPress: () => void;
}> = ({ activeItem, item, onPress }) => {
    const [playing, setIsPlaying] = useState(false);
    const [status, setStatus] = useState({});

    return (
        <View className="mr-5">
            {playing ? (
                <Video
                    source={{ uri: item.video }}
                    className="w-52 h-52 rounded-[35px] mt-3 bg-white/10"
                    useNativeControls
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping
                    onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                />
            ) : (
                <TouchableOpacity
                    className="relative justify-center items-center"
                    activeOpacity={0.7}
                    onPress={() => {
                        setIsPlaying(true);
                    }}
                >
                    <ImageBackground
                        source={{
                            uri:
                                item.thumbnail ||
                                "https://via.placeholder.com/200",
                        }}
                        className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
                        resizeMode="cover"
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

const Trending: React.FC<TrendingProps> = ({ posts }) => {
    const [activeItem, setActiveItem] = useState(posts[0]?.id || "");
    const flatListRef = useRef<FlatList<Post>>(null);

    const handlePress = (id: string, index: number) => {
        setActiveItem(id);
        flatListRef.current?.scrollToIndex({ index, animated: true });
    };

    return (
        <View>
            <FlatList
                ref={flatListRef}
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <TrendingItem
                        activeItem={activeItem}
                        item={item}
                        onPress={() => handlePress(item.id, index)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default Trending;
