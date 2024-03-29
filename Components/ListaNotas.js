import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ListaNotas = (props) => {
  return (
    <TouchableOpacity style={styles.nomeBotao} onPress={props.modalOpen} onLongPress={props.excluir}>
      <Text style={styles.NoteTitle}>{props.title}</Text>
      <Text style={styles.datetime}>{props.data}</Text>
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
    paddingVertical: 10,
    paddingHorizontal: "2%",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 3,
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowOpacity: 0.6,
    shadowRadius: 3
  },
  datetime: {
    color: "#aaa",
    fontSize: 13,
    marginLeft: 10,
    marginTop: 5,
    fontStyle: "italic"
  }
});
