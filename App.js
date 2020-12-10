import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
  Dimensions,
  Keyboard,
  FlatList,
  View,
  Modal,
  Alert,
} from "react-native";

import ListaNotas from "./Components/ListaNotas";
import Header from "./Components/Header";

export default function App() {
  const [Notas, setNotas] = useState([]);

  const adicionarNota = (tituloNota) => {
    setNotas((notasAtuais) => [
      ...notasAtuais,
      { id: Math.random().toString(), value: tituloNota },
    ]);
  };

  const removeNota = (notaId) => {
    setNotas((notasAtuais) => {
      return notasAtuais.filter((nota) => nota.id !== notaId);
    });
  };

  const [ḿodalVisible, setModalVisible] = useState(false);

  return (
    <>
      <StatusBar barStyle="default" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.container}>
          <Header adicionarNotaBtn={adicionarNota} />
          <FlatList
            inverted
            style={styles.NotesField}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
            persistentScrollbar
            data={Notas}
            renderItem={(itemData) => (
              <ListaNotas
                modalOpen={() => setModalVisible(true)}
                id={itemData.item.id}
                onDelete={removeNota}
                title={itemData.item.value}
              />
            )}
          />

          <Modal
            visible={ḿodalVisible}
            transparent={true}
            animationType="fade"
            statusBarTranslucent={true}
          >
            <View style={styles.ModalFundo}></View>
          </Modal>

          <Modal
            visible={ḿodalVisible}
            transparent={true}
            animationType="slide"
            statusBarTranslucent={true}
          >
            <View style={styles.ModalCorpo}>
              <TouchableWithoutFeedback
                onPress={() => setModalVisible(false)}
              >
                <View style={{ width: "100%", height: "100%" }}></View>
              </TouchableWithoutFeedback>
              <View style={styles.NotaCorpo}></View>
            </View>
          </Modal>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("screen").width,
    backgroundColor: "#ddd",
    paddingHorizontal: 10,
    paddingTop: 30,
    alignItems: "center",
    flexDirection: "column",
  },
  NotesField: {
    maxHeight: Dimensions.get("screen").height - 85,
    width: Dimensions.get("screen").width,
    marginTop: 5,
  },
  ModalFundo: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  ModalCorpo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  NotaCorpo: {
    width: 350,
    height: 500,
    backgroundColor: "#fff",
    position: "absolute",
  },
});
