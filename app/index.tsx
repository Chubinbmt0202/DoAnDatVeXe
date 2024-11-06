import React, { useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from "react-native";

const HomeScreen = () => {

    return (
        <SafeAreaView className="flex-1" style={{ backgroundColor: '#fff' }}>
            <StatusBar barStyle="light-content" backgroundColor="#192031" />
            <View className="h-full">
                <View className="w-full px-4 items-center my-8">
                    <View className="flex-row justify-center items-center pb-24">
                        <MaterialCommunityIcons name="airplane" size={24} color="green" />
                        <Text className="text-2xl text-black font-bold ml-2">Nhà xe Tuấn Trung</Text>
                    </View>

                    <View>
                        <Text className="text-[52px] font-medium leading-[60px]">
                            Discover your Dream Trafics
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;
