import {
  AddTask,
  CustomFlatList,
  CustomModal,
  CustomRenderItem,
} from "./components/index";
import { Button, StyleSheet, Text, View } from "react-native";

import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: 30,
  },
  modalTitle: {
    fontSize: 16,
  },
  modalMessageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  modalMessage: {
    fontSize: 14,
  },
  selectedTask: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-around",
  },
});

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandleChangeText = (text) => {
    setTask(text);
  };

  const addItem = () => {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), value: task }]);

    setTask("");
  };

  const onHandleModal = (id) => {
    // Toggle Modal
    setModalVisible(!modalVisible);

    //Seleccionar el elemento con el mismo ID (El find a diferencia del map y del filter que retornan arrays, el FIND retorna un objeto)
    setSelectedTask(tasks.find((item) => item.id === id));
  };

  const renderItem = ({ item }) => (
    // <View key={`item-${item.id}`} style={styles.itemContainer}>
    //   <Text style={styles.item}>{item.value}</Text>
    //   <TouchableOpacity onPress={() => onHandleModal(item.id)}>
    //     <Text style={styles.delete}>X</Text>
    //   </TouchableOpacity>
    // </View>
    <CustomRenderItem
      item={item}
      onPress={() => onHandleModal(item.id)}
      key={item.id}
    />
  );

  const onHandleDeleteItem = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
    setSelectedTask(null);
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <AddTask
        item={task}
        onChangeText={onHandleChangeText}
        placeholder={"new task"}
        addItem={addItem}
        selectionColor="#4A306D"
        placeholderTextColor="#4A306D"
        textButton="Add"
        color="#4A306D"
      />
      <CustomFlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <CustomModal animationType="slide" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Detalle de la lista</Text>
        </View>
        <View style={styles.modalMessageContainer}>
          <Text style={styles.modalMessage}>
            ¿Estas seguro de que quieres eliminar?
          </Text>
        </View>
        <View style={styles.modalMessageContainer}>
          <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Eliminar"
            onPress={() => onHandleDeleteItem(selectedTask?.id)}
            color="#4a306d"
          />
          <Button
            title="Cancelar"
            onPress={() => setModalVisible(!modalVisible)}
            color="#cccccc"
          />
        </View>
      </CustomModal>
    </View>
  );
}
