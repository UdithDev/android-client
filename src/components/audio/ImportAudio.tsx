import { Upload } from "lucide-react-native";
import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";

import { Volume2 } from "lucide-react-native";

interface ButtonProps {
  onPress: () => void;
  label: string;
  variant?: "outline" | "filled";
  icon?: React.ReactNode;
  disabled?: boolean;
  buttonStyle?: object;
  textStyle?: object;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  label,
  variant = "filled",
  icon,
  disabled = false,
  buttonStyle,
  textStyle,
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[
      styles.button,
      variant === "outline" && styles.buttonOutLine,
      disabled && styles.buttonDisabled,
      buttonStyle,
    ]}
    activeOpacity={0.7}
  >
    {icon && <View style={styles.iconContainer}>{icon}</View>}
    <Text
      style={[
        styles.buttonText,
        variant === "outline" && styles.buttonTextOutline,
        disabled && styles.buttonTextDisabled,
        textStyle,
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

const ImportAudio: React.FC = () => {
  const [isRecording, setRecording] = useState(false);
  const [fileName, setFileName] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Noise Cleaner</Text>
          <Text style={styles.subtitle}>unnecessary noise suppression</Text>
        </View>

        {/* Main Card */}
        <View style={styles.card}>
          <View style={styles.uploadSection}>
            <View style={styles.uploadIconContainer}>
              <Upload size={32} color="#059669" />
            </View>
            <View style={styles.uploadTextContainer}>
              <Text style={styles.uploadText}>Upload your audio file</Text>
              <Text style={styles.uploadSubtext}>Supports WAV, MP3, M4A </Text>
            </View>
            <Button
              label="Choose File"
              variant="outline"
              onPress={() => {}}
              buttonStyle={styles.chooseFileButton}
            />
          </View>
          <Button
            label="Clean Audio"
            icon={<Volume2 size={20} color="#FFFFFF" />}
            onPress={() => {}}
            disabled={!fileName && !isRecording}
            buttonStyle={styles.cleanButton}
          />
        </View>

        <View style={styles.playAudio}>
          <Text>Play Audio</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  content: {
    flex: 1,
    padding: 16,
    maxWidth: Math.min(width - 32, 480),
    alignSelf: "center",
    width: "100%",
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#4B5563",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  uploadSection: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 32,
    alignItems: "center",
    marginBottom: 24,
  },
  uploadIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#ECFDF5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  uploadTextContainer: {
    alignItems: "center",
    marginBottom: 16,
  },

  uploadText: {
    fontSize: 14,
    color: "#4B5563",
    marginBottom: 4,
  },
  uploadSubtext: {
    fontSize: 12,
    color: "#9CA3AF",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#059669",
  },
  buttonOutLine: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#059669",
  },
  buttonDisabled: {
    backgroundColor: "#E5E7EB",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },

  buttonTextOutline: {
    color: "#059669",
  },

  buttonTextDisabled: {
    color: "#9CA3AF",
  },
  iconContainer: {
    marginRight: 8,
  },

  chooseFileButton: {
    paddingHorizontal: 24,
  },
  cleanButton: {
    width: "100%",
  },

  playAudio: {
    marginTop: 25,
    width: "100%",
    alignItems: "center",
  },
});

export default ImportAudio;
