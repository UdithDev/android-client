import React from "react";
import { Login } from "../components/audio";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from "../navigation/types";


type LoginScreenProps={
  navigation:NativeStackNavigationProp<RootStackParamList, 'Login'>;
};


const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
    return <Login navigation={navigation}/>;
  };
  export default LoginScreen;
  