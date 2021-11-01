import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
  Button,
} from "react-native";

const CorpoNota = (props) => {
  return (
    <Modal
      visible={props.visible}
      transparent={true}
      animationType="fade"
      statusBarTranslucent={true}
    >
      <View style={styles.ModalFundo}></View>

      <Modal
        visible={props.visible}
        transparent={true}
        animationType="slide"
        statusBarTranslucent={true}
      >
        <View style={styles.ModalCorpo}>
          <TouchableWithoutFeedback onPress={props.close}>
            <View style={{ width: "100%", height: "100%" }}></View>
          </TouchableWithoutFeedback>
          <View style={styles.NotaCorpo}>
            <View style={styles.NotaHeader}>
              <TextInput
                style={styles.NotaTitle}
                value={props.titulo}
                onChangeText={(text) => props.onChangeTitle(text)}
              />
              <Text style={styles.NotaDate}>
                {props.data + " " + props.hora}
              </Text>
            </View>
            <View style={styles.NotaCampo}>
              <TextInput
                style={styles.NotaCampoText}
                value={props.texto}
                placeholder="Escreva aqui seu texto"
                onChangeText={(text) => props.onChangeText(text)}
                numberOfLines={50}
                multiline
                textAlignVertical="top"
              />
            </View>
            <Button title="Salvar" onPress={props.onSave} />
          </View>
        </View>
      </Modal>
    </Modal>
  );
};

export default CorpoNota;

const styles = StyleSheet.create({
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
  },
});
