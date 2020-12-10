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
  Text,
} from "react-native";

import ListaNotas from "./Components/ListaNotas";
import Header from "./Components/Header";

export default function App() {
  const [inputNota, setInputNota] = useState("");

  const notaInput = (addTexto) => {
    setInputNota(addTexto);
  };

  const [Notas, setNotas] = useState([]);

  const adicionarNota = (tituloNota) => {
    setNotas((notasAtuais) => [
      ...notasAtuais,
      { id: Math.random().toString(), value: tituloNota },
    ]);
    setInputNota("");
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
          <Header
            adicionarNotaBtn={adicionarNota}
            onChangeText={notaInput}
            value={inputNota}
            onPress={inputNota}
          />
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
              <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                <View style={{ width: "100%", height: "100%" }}></View>
              </TouchableWithoutFeedback>
              <View style={styles.NotaCorpo}>
                <View style={styles.NotaHeader}>
                  <Text style={styles.NotaTitle}>Título da nota</Text>
                  <Text style={styles.NotaDate}>dd/mm/aa hh:mm</Text>
                </View>
                <View style={styles.NotaCampo}>
                  <Text style={styles.NotaCampoText}>
                    Donec imperdiet justo arcu, sit amet laoreet orci fermentum
                    vitae. Etiam maximus nisl mi, vitae accumsan orci malesuada
                    eu. In in sem aliquam, laoreet ex eu, mollis elit. Ut vitae
                    sapien et nunc volutpat accumsan. Vestibulum faucibus odio
                    elit, vel rhoncus quam tincidunt at. Suspendisse consequat
                    sapien a dolor tempor egestas.
                    {"\n\n"}Nullam non euismod
                    velit, sit amet bibendum metus. Nam vulputate sagittis
                    condimentum. In hac habitasse platea dictumst. Suspendisse
                    sed ligula sit amet ipsum tincidunt cursus. Fusce aliquet
                    nisl non scelerisque ornare. Aliquam interdum hendrerit
                    diam, imperdiet tincidunt felis porttitor eget. Nunc
                    fermentum euismod neque, ut lacinia ante venenatis a.
                  </Text>
                </View>
              </View>
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
    backgroundColor: "#bbb",
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
    borderRadius: 10,
    padding: 10,
  },
  NotaHeader: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    paddingTop: 10,
    marginTop: 0,
    // backgroundColor: "#f5f5f5",
  },
  NotaTitle: {
    width: "80%",
    fontSize: 20,
  },
  NotaDate: {
    width: "20%",
    textAlign: "right",
    fontSize: 12,
    color: "#888",
  },
  NotaCampo: {
    width: "100%",
    height: 420,
    marginTop: 5,
  },
  NotaCampoText: {
    color: "#555",
  }
});
