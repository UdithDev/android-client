import React from "react";
import { SafeAreaView } from "react-native";
import { RecordAudio } from "../components/audio";
const RecordAudioScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RecordAudio />
    </SafeAreaView>
  );
};

export default RecordAudioScreen;
