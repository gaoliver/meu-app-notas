import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, Vibration, View } from "react-native";

const ListaNotas = (props) => {

  const excluirAlert = () => {
    Vibration.vibrate(50)
    Alert.alert(
      "Excluir",
      "Deseja excluir a nota?",
      [
        {
          text: 'Não'
        },
        {
          text: 'Sim',
          onPress: props.onDelete.bind(this, props.id)
        },
      ]
      )
  }

  return (
    <TouchableOpacity style={styles.nomeBotao} onPress={props.modalOpen} onLongPress={excluirAlert}>
      <Text style={styles.NoteTitle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ListaNotas;

const styles = StyleSheet.create({
  NoteTitle: {
    color: "#666",
    fontSize: 20,
  },
  nomeBotao: {
    width: "94%",
    paddingVertical: 20,
    paddingHorizontal: "2%",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 3,
    backgroundColor: "#fff",
    borderRadius: 20,
  }
});
