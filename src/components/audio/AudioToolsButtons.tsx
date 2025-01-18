import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Music, Mic } from 'lucide-react-native';

interface ButtonProps {
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
}

const AudioButton: React.FC<ButtonProps> = ({ icon, label, onPress }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View style={styles.iconContainer}>
      {icon}
    </View>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const AudioToolsButtons: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonGrid}>
        <AudioButton
          icon={<Music size={24} color="#B0B0B5" />}
          label="Import Audio"
          onPress={() => console.log('Import pressed')}
        />
        <AudioButton
          icon={<Mic size={24} color="#B0B0B5" />}
          label="Record"
          onPress={() => console.log('Record pressed')}
        />
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  buttonGrid: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    maxWidth: Math.min(width - 32, 600), // Similar to max-w-xl in web version
    gap: 16,
  },
  button: {
    flex: 1,
    backgroundColor: '#141419',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#a86032',
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 14,
    color: '#B0B0B5',
  },
});

export default AudioToolsButtons;