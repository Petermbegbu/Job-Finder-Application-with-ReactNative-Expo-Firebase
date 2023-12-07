import React, { useCallback, useState, useEffect } from "react";
import { TouchableOpacity, Text } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";

const FilePicker = ({ onSelectFile, style, setDownloadedUri }) => {
  const [pdfUri, setPdfUri] = useState(null);

  // useEffect(() => {
  //   const downloadPDF = async () => {
  //     try {
  //       if (pdfUri) {
  //         const fileUri = FileSystem.cacheDirectory + "temp.pdf";
  //         // await FileSystem.downloadAsync(pdfUri, fileUri);
  //         // const asset = await MediaLibrary.createAssetAsync(fileUri);
  //         // setDownloadedUri(asset.uri); // Set the downloaded URI
  //         console.log("downloaded pdf", asset);
  //       }
  //     } catch (error) {
  //       console.error("Error downloading PDF:", error);
  //     }
  //   };

  //   downloadPDF();
  // }, [pdfUri]);

  const pickDocument = useCallback(async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
        copyToCacheDirectory: true,
      });

      if (!result.canceled) {
        // Handle the selected file
        onSelectFile(result.assets);
        // setPdfUri(result.assets[0].uri);
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
