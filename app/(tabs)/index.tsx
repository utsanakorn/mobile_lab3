import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ToDoForm from "../ToDoForm";
import ToDoList from "../ToDoList";

export default function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My ToDo List</Text>

      <ToDoForm />
      <ToDoList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
});
