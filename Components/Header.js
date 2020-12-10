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
        />
        <TouchableOpacity
          style={styles.Adicionar}
          onPress={props.adicionarNotaBtn.bind(this, props.onPress)}
        >
          <Text style={styles.TextBtn}>Adicionar</Text>
        </TouchableOpacity>
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
    width: "72%",
    fontSize: 20,
    justifyContent: "center",
    marginLeft: "3%",
    marginRight: "2.1%",
  },
  Adicionar: {
    width: "23%",
    height: '100%',
    backgroundColor: "#08ff",
    alignItems: "center",
    justifyContent: "center",
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
    backgroundColor: "#fff7",
    borderRadius: 20,
    overflow: 'hidden'
  },
});
