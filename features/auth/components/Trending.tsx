import { View, Text, FlatList } from "react-native";
import React from "react";

interface Post {
    id: number;
    title?: string;
}

interface TrendingProps {
    posts: Post[];
}

const Trending: React.FC<TrendingProps> = ({ posts }) => {
    return (
        <View>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Text className="text-white  text-3xl font-pregular">
                        {item.id}
                    </Text>
                )}
                horizontal
            />
        </View>
    );
};

export default Trending;
