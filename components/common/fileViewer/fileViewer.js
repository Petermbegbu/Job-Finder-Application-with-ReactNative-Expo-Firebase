import { View } from "react-native";
import { WebView } from "react-native-webview";
import Pdf from "react-native-pdf";

const FileViewer = ({ fileUri, downloadedUri }) => {
  // console.log("downloadedUri", downloadedUri);
  console.log("fileUri", fileUri);

  return (
    <View>
      <WebView
        source={{ uri: fileUri }}
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scalesPageToFit={true}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.error("WebView error:", nativeEvent);
        }}
        // You can customize the WebView's properties as needed
      />
    </View>
  );
};

// const FileViewer = ({ fileUri, downloadedUri }) => {
//   console.log("fileUrl", fileUri, downloadedUri);
//   return (
//     <View>
//       <Pdf
//         source={{ uri: fileUri }}
//         trustAllCerts={true}
//         onLoadComplete={(numberOfPages, filePath) => {
//           console.log("no. of pages", numberOfPages);
//         }}
//         onError={(error) => {
//           console.log("pdf error", error);
//         }}
//       />
//     </View>
//   );
// };

export default FileViewer;
