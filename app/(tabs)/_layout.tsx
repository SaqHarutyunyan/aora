import React from "react";
import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import { icons } from "../../constants";

interface TabIconProps {
    icon: any;
    color: string;
    name: string;
    focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
    return (
        <View className="w-[100px] items-center justify-center gap-2 ">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text
                className={`${
                    focused ? "font-psemibold" : "font-pregular"
                } text-[10px]`}
                style={{ color: color }}
            >
                {name}
            </Text>
        </View>
    );
};

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#FFA001",
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarStyle: {
                        backgroundColor: "#161622",
                        borderTopWidth: 1,
                        borderTopColor: "#232533",
                        height: 60,
                    },
                    tabBarItemStyle: { paddingVertical: 10 },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                focused={focused}
                                name="Home"
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                focused={focused}
                                name="Profile"
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="create"
                    options={{
                        title: "Create",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.plus}
                                color={color}
                                focused={focused}
                                name="Create"
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="bookmark"
                    options={{
                        title: "Bookmark",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.bookmark}
                                color={color}
                                focused={focused}
                                name="Bookmark"
                            />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
};

export default TabsLayout;
