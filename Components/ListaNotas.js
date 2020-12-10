import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ListaNotas = (props) => {
  return (
    <TouchableOpacity style={styles.nomeBotao} onPress={props.modalOpen} onLongPress={ () =>
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
            }
          ]
          )
        }>
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
