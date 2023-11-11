import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const logo = require("../../../../assets/favicon.png");
import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ item, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image source={logo} resizeMode="contain" style={styles.logoImage} />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {item.JobTitle}
        </Text>
        <Text style={styles.jobType}>{item.location}`</Text>

        <Text style={styles.jobType}>{item.WorkType}`</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
