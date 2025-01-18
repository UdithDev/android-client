import React from "react";
import { SafeAreaView } from "react-native";
import { AudioToolsButtons } from "../components/audio";

const AudioScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AudioToolsButtons />
    </SafeAreaView>
  );
};

export default AudioScreen;
