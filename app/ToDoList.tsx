import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ToDoList({ tasks }: { tasks: string[] }) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <View key={index} style={styles.item}>
          <Text>{task}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: "#e0e0e0",
    marginBottom: 10,
    borderRadius: 5,
  },
});
