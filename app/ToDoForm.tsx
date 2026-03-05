import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function ToDoForm() {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Enter a new task"
        placeholderTextColor="#888"  
                         
      />
      <Button title="Add Task" />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#888", 
    padding: 10,
    marginRight: 10,
    color:"#fff"
  },
});