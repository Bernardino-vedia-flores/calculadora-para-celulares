import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { globalStyles } from '@/styles/global-styles';

const RootLayout = () => {
  // Ref: https://docs.expo.dev/versions/latest/sdk/font/
  // La fuente vive en ./assets/fonts (raíz del proyecto), por eso se sube dos niveles desde src/app
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      <Slot />

      <StatusBar style="light" />
    </View>
  );
};

export default RootLayout;