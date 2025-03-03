import React from "react";
import { SafeAreaView } from "react-native";
import { AudioToolsButtons } from "../components/audio";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from "../navigation/types";

type AudioScreenProps={
  navigation:NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const AudioScreen: React.FC<AudioScreenProps> = ({navigation}) => {
  return <AudioToolsButtons navigation={navigation}/>;
};

export default AudioScreen;
