import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Header = (props) => {
  return (
    <View style={styles.Header}>
      <View style={styles.HeaderInner}>
        <TextInput
          style={styles.Input}
          placeholder="Adicionar anotação"
          onChangeText={props.onChangeText}
          value={props.value}
          textAlign="center"
          onSubmitEditing={props.adicionarNotaBtn.bind(this, props.note)}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    width: Dimensions.get("screen").width,
    height: 80,
    paddingTop: 10,
  },
  Input: {
    width: "100%",
    fontSize: 20,
    justifyContent: "center",
    marginHorizontal: "3%",
  },
  TextBtn: {
    color: "#fff",
    fontSize: 18,
  },
  HeaderInner: {
    flexDirection: "row",
    width: "94%",
    height: 67,
    paddingLeft: "1%",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 3,
    backgroundColor: "#fff3",
    borderRadius: 20,
    overflow: "hidden",
  },
});
