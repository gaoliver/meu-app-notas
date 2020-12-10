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
  const [inputNota, setInputNota] = useState("");

  const notaInput = (addTexto) => {
    setInputNota(addTexto);
  };

  return (
    <View style={styles.Header}>
      <TextInput
        style={styles.Input}
        placeholder="Adicionar anotação"
        onChangeText={notaInput}
        value={inputNota}
      />
      <TouchableOpacity
        style={styles.Adicionar}
        onPress={props.adicionarNotaBtn.bind(this, inputNota)}
      >
        <Text style={styles.TextBtn}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    height: 80,
    paddingTop: 10,
  },
  Input: {
    width: "70%",
    fontSize: 20,
    justifyContent: "center",
    marginLeft: "3%",
    marginRight: "2%",
  },
  Adicionar: {
    width: "23%",
    backgroundColor: "#d50001",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  TextBtn: {
    color: "#fff",
    fontSize: 18,
  },
});
