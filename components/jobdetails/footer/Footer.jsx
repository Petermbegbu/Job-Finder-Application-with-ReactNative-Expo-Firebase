import { View, Text, TouchableOpacity } from "react-native";

import styles from "./footer.style";

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.applyBtn} onPress={() => {}}>
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
