import { EarthLock, Mic } from "lucide-react-native";
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";

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
      variant === "outline" && styles.buttonOutline,
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

const RecordAudio: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const pulseAnim = new Animated.Value(1);

  React.useEffect(() => {
    if (isRecording) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 0.3,
            duration: 1000,
            useNativeDriver: true,
          }),

          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      pulseAnim.setValue(1);
    }
  }, [isRecording]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Noise Cleaner</Text>
        </View>

        {/* Recording Section */}
        <View style={styles.recordingSection}>
          <Animated.View
            style={[
              styles.micContainer,
              isRecording && styles.micContainerRecording,
              { opacity: pulseAnim },
            ]}
          >
            <Mic size={48} color={isRecording ? "#EF4444" : "#9CA3AF"} />
          </Animated.View>

          <Button
            label={isRecording ? "Stop recording" : "Start Recording"}
            onPress={() => setIsRecording(!isRecording)}
            buttonStyle={isRecording ? styles.stopButton : styles.recordButton}
          />
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

  recordingSection: {
    alignItems: "center",
    marginBottom: 24,
  },
  micContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  micContainerRecording: {
    backgroundColor: "#FEE2E2",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#059669",
  },
  buttonOutline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#059669",
  },
  buttonDisabled: {
    backgroundColor: "#E5E7EB",
  },
  iconContainer: {
    marginRight: 8,
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
  stopButton: {
    width: "100%",
    backgroundColor: "#EF4444",
  },
  recordButton: {
    width: "100%",
    backgroundColor: "#059669",
  },
});

export default RecordAudio;
