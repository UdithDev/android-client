import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Lock, Mail, Eye, EyeOff } from "lucide-react-native";
import { RootStackParamList } from "../../navigation/types";

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Login">;
};

const Login: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      // Handle validation
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to home on successful login
      navigation.navigate("Home");
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.logoContainer}>
            {/* Replace with your app logo */}
            <View style={styles.logoPlaceholder}>
              <Text style={styles.logoText}>AudioApp</Text>
            </View>
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.headerText}>Welcome Back</Text>
            <Text style={styles.subHeaderText}>Login to continue</Text>

            <View style={styles.inputContainer}>
              <Mail size={20} color="#B0B0B5" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#666"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Lock size={20} color="#B0B0B5" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#666"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.passwordToggle}
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={20} color="#B0B0B5" />
                ) : (
                  <Eye size={20} color="#B0B0B5" />
                )}
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.forgotPasswordContainer}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
              onPress={handleLogin}
              disabled={isLoading}
              activeOpacity={0.7}
            >
              <Text style={styles.loginButtonText}>
                {isLoading ? "Logging in..." : "Login"}
              </Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              {/* <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.signupButtonText}>Sign Up</Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0F",
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#a86032",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  formContainer: {
    width: "100%",
    maxWidth: Math.min(width - 48, 400),
    alignSelf: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  subHeaderText: {
    fontSize: 16,
    color: "#B0B0B5",
    marginBottom: 32,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#141419",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#2A2A30",
    marginBottom: 16,
    height: 56,
    paddingHorizontal: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
    height: "100%",
  },
  passwordToggle: {
    padding: 4,
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: "#a86032",
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#a86032",
    borderRadius: 8,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  loginButtonDisabled: {
    backgroundColor: "rgba(168, 96, 50, 0.6)",
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signupText: {
    color: "#B0B0B5",
    fontSize: 14,
  },
  signupButtonText: {
    color: "#a86032",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Login;