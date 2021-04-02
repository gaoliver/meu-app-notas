import React from "react";
import { View, Text, Linking } from "react-native";

import { styles } from "./styles";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>by</Text>
      <Text
        onPress={() => Linking.openURL("https://instagram.com/eugaoliver")}
        style={styles.footerLinkText}
      >
        @eugaoliver
      </Text>
    </View>
  );
};

export default Footer;
