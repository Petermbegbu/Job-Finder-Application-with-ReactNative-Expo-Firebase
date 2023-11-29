import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { COLORS } from "../constants";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");

  const handlePress = () => {
    router.push("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Describe your Experience</Text>

      <TextInput
        value={feedback}
        onChangeText={(value) => setFeedback(value)}
        multiline
        style={styles.feedbackText}
        placeholder="Comment"
      />

      <TouchableOpacity style={styles.sendBtn} onPress={handlePress}>
        <Text style={styles.sendText}>Send Feedback</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    gap: 20,
  },

  titleText: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },

  feedbackText: {
    height: 200,
    borderWidth: 2,
    textAlignVertical: "top",
    fontSize: 16,
    padding: 5,
  },

  sendBtn: {
    backgroundColor: COLORS.tertiary,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },

  sendText: {
    color: "white",
  },
});
