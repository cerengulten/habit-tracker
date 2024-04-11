import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

export const Font = () => {
  const [loaded] = useFonts({
    // Specify your Google Font and its variants
    mainfont: Roboto_400Regular,
    // Add more fonts if needed
  });

  return loaded;
};