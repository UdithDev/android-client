import React from "react";
import { SafeAreaView } from "react-native";
import { ImportAudio } from "../components/audio";

const ImportAudioScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImportAudio />
    </SafeAreaView>
  );
};

export default ImportAudioScreen;
