import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";

import useFont from "../hooks/useFont.hook";

export default function Explore() {
  const Font = useFont();
  return (
    <SafeAreaView style={styles.main}>
      <Text style={{ fontFamily: Font.Regular }}>Explore</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
