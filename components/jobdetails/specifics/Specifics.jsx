import React from "react";
import { View, Text } from "react-native";

import styles from "./specifics.style";

const Specifics = ({ qualification, experience, skills }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Qualifications</Text>
        <View style={styles.pointsContainer}>
          <View style={styles.pointWrapper}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{qualification}</Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Experience</Text>
        <View style={styles.pointsContainer}>
          <View style={styles.pointWrapper}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{experience}</Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Skills</Text>
        <View style={styles.pointsContainer}>
          <View style={styles.pointWrapper}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{skills}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Specifics;
