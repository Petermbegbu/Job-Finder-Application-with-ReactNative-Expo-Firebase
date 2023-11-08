import React from "react";
import { View, Text } from "react-native";

import styles from "./responsibility.style";

const Responsibility = ({ title, responsibility }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.pointsContainer}>
          <View style={styles.pointWrapper}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{responsibility}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Responsibility;
