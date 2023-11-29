import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import styles from "./footer.style";

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => router.push("/applicationForm")}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
