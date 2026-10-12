import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { Colors } from '@/constants/theme';

const RootLayout = () => {
  // Ref: https://docs.expo.dev/versions/latest/sdk/font/
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>
      <Slot />

      <StatusBar style="light" />
    </View>
  );
};

export default RootLayout;