import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

interface FormFieldProps {
    title: string;
    value: string;
    handelChangeText: (text: string) => void;
    error?: string;
    disabled?: boolean;
    testID?: string;
    keyboardType?: string;
    placeholder?: string;
    otherStyles?: string;
}

const FormField: React.FC<FormFieldProps> = ({
    title,
    value,
    handelChangeText,
    keyboardType,
    placeholder,
    otherStyles,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false); // Ավելացնում ենք focus-ի state

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100 font-pmedium mb-2">
                {title}
            </Text>
            <View
                className={`w-full h-16 bg-black-100 px-4 rounded-2xl items-center flex-row ${
                    isFocused
                        ? "border-2 border-secondary"
                        : "border-2 border-black-200"
                } `}
            >
                <TextInput
                    className="flex-1 text-white font-psemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handelChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                    onFocus={() => setIsFocused(true)} // Focus-ի ժամանակ փոխում ենք state
                    onBlur={() => setIsFocused(false)} // Blur-ի ժամանակ վերադառնում ենք նախնական վիճակի
                />
                {title === "Password" && (
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                            source={!showPassword ? icons.eye : icons.eyeHide}
                            className="w-6 h-6"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormField;
