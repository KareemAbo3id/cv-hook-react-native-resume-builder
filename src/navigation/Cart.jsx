import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useFont from "../hooks/useFont.hook";

export default function Cart() {
  const Font = useFont();
  return (
    <SafeAreaView style={styles.main}>
      <Text style={{ fontFamily: Font.Regular }}>Cart screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
