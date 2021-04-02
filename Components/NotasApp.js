import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
  Dimensions,
  Keyboard,
  FlatList,
  Vibration,
  Alert,
  Button,
} from "react-native";
import moment from "moment";
import AsyncStorage from "@react-native-community/async-storage";

import ListaNotas from "./ListaNotas";
import Header from "./Header";
import CorpoNota from "./CorpoNota";

export default function App() {
  const [Notas, setNotas] = useState([]);
  const [state, setState] = useState({
    update: 0,
  });
  const [inputNota, setInputNota] = useState({
    titulo: "",
    texto: "",
    data: null,
    hora: null,
  });
  const notaInput = (addTexto) => {
    setInputNota({
      titulo: addTexto,
      texto: "",
      data: moment().format("DD/MM/YY"),
      hora: moment().format("HH:mm"),
    });
  };

  // Obter dados
  useEffect(() => {
    AsyncStorage.getItem("NOTAS")
      .then((dados) => (dados !== null ? setNotas(JSON.parse(dados)) : null))
      .catch((err) => console.log("\n\nHouve um erro :" + err))
      .finally((dados) => console.log("Dados pegos: " + dados + "\n\n"));
    AsyncStorage.getItem("state").then((x) =>
      x !== null ? setState({ update: parseInt(x) }) : null
    );
  }, []);

  // Salvar Dados
  useEffect(() => {
    AsyncStorage.setItem("NOTAS", JSON.stringify(Notas))
      .then(() => console.log("\n\nSalvo com sucesso"))
      .finally(() => console.log("NOTAS: " + JSON.stringify(Notas) + "\n\n"));
    state.update !== null ? AsyncStorage.setItem("state", state.update.toString()) : null;
  }, [state]);

  // Salvar nota
  const adicionarNota = (tituloNota) => {
    if (tituloNota.length === 0) {
      return;
    }

    setNotas((notasAtuais) => [
      ...notasAtuais,
      { id: Math.random().toString(), ...inputNota },
    ]);

    setInputNota({
      titulo: "",
      texto: "",
      data: null,
      hora: null,
    });

    setState({
      ...state,
      update: +1,
    });
  };

  // Excluir nota
  const excluirAlert = (id) => {
    Vibration.vibrate(50);
    Alert.alert("Excluir", "Deseja excluir a nota?", [
      {
        text: "Não",
      },
      {
        text: "Sim",
        onPress: removeNota.bind(this, id),
      },
    ]);
  };

  const removeNota = (notaId) => {
    setNotas((notasAtuais) => {
      return notasAtuais.filter((nota) => nota.id !== notaId);
    });
    setState({
      ...state,
      update: +1,
    });
  };

  // Modal da nota
  const [modalVisible, setModalVisible] = useState({
    visible: false,
    id: null,
  });

  const [modalNotaDados, setModalNotaDados] = useState({
    id: null,
    titulo: "",
    texto: "",
    data: null,
    hora: null,
  });

  function openNota(id) {
    setModalVisible({ visible: true, id: id });

    Notas.filter((nota) => nota.id === id).map((x) => setModalNotaDados(x));
  }

  function salvarNota() {
    const index = Notas.findIndex((x) => x.id === modalNotaDados.id);
    Notas[index] = {
      ...modalNotaDados,
      data: moment().format("DD/MM/YY"),
      hora: moment().format("HH:mm"),
    };
    setModalVisible({ visible: false, id: null });
    setState({
      ...state,
      update: +1,
    });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <Header
          adicionarNotaBtn={adicionarNota}
          onChangeText={notaInput}
          value={inputNota.titulo}
          note={inputNota.titulo}
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
              data={moment(
                itemData.item.data + " - " + itemData.item.hora,
                "DD/MM/YY - hh:mm"
              ).fromNow()}
              modalOpen={() => openNota(itemData.item.id)}
              id={itemData.item.id}
              title={itemData.item.titulo}
              excluir={() => excluirAlert(itemData.item.id)}
            />
          )}
        />

        <CorpoNota
          visible={modalVisible.visible}
          close={() => {
            setModalVisible({ visible: false, id: null });
            setModalNotaDados({
              id: null,
              titulo: "",
              texto: "",
              data: "",
              hora: "",
            });
          }}
          titulo={modalNotaDados.titulo}
          texto={modalNotaDados.texto}
          data={modalNotaDados.data}
          hora={modalNotaDados.hora}
          onChangeTitle={(text) =>
            setModalNotaDados({ ...modalNotaDados, titulo: text })
          }
          onChangeText={(text) =>
            setModalNotaDados({ ...modalNotaDados, texto: text })
          }
          onSave={() => salvarNota()}
        />
        {/* <Button
          title="Clear"
          onPress={() => {
            AsyncStorage.clear().then(console.log("Dados locais limpos."));
          }}
        /> */}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("screen").width,
    backgroundColor: "#aaa",
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
});
