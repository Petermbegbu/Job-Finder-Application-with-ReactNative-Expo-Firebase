import React, { useCallback } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import * as DocumentPicker from "expo-document-picker";

const FilePicker = ({ onSelectFile, style }) => {
  const pickDocument = useCallback(async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();

      if (!result.canceled) {
        // Handle the selected file
        onSelectFile(result.assets);
      } else {
        // User cancelled the picker
        console.log("Document picker cancelled");
      }
    } catch (error) {
      // Handle errors
      console.error("Error picking document:", error);
    }
  }, [onSelectFile]);

  return (
    <TouchableOpacity onPress={pickDocument}>
      <Text style={style}>Upload CV</Text>
    </TouchableOpacity>
  );
};

export default FilePicker;
