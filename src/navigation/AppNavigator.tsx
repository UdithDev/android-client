import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import AudioScreen from "../screens/AudioScreen";
import ImportAudio from "../components/audio/ImportAudio";
import RecordAudio from "../components/audio/RecordAudio";
import { Login } from "../components/audio";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0A0A0F",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
         <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="Home"
          component={AudioScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ImportAudio"
          component={ImportAudio}
          options={{
            title: "Import Audio",
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="RecordAudio"
          component={RecordAudio}
          options={{
            title: "Record Audio",
            headerBackTitle: "Back",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
