import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

interface SearchInputProps {
    title?: string;
    value?: string;
    handelChangeText: (text: string) => void;
    error?: string;
    disabled?: boolean;
    testID?: string;
    keyboardType?: string;
    placeholder?: string;
    otherStyles?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
    title,
    value,
    handelChangeText,
    keyboardType,
    placeholder,
    otherStyles,
    ...props
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View
            className={`w-full h-16 bg-black-100 px-4 rounded-2xl items-center flex-row space-x-4 ${
                isFocused
                    ? "border-2 border-secondary"
                    : "border-2 border-black-200"
            } `}
        >
            <TextInput
                className="text-base mt-0.5 text-white flex-1 font-pregular"
                value={value}
                placeholder="Search for a video topic"
                placeholderTextColor="#7b7b8b"
                onChangeText={handelChangeText}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <TouchableOpacity>
                <Image
                    source={icons.search}
                    className="w-6 h-6"
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
};

export default SearchInput;
