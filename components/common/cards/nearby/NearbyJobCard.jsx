import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const logo = require("../../../../assets/favicon.png");
import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ JobList, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image source={logo} resizeMode="contain" style={styles.logoImage} />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {JobList.JobTitle}
        </Text>
        <Text style={styles.jobType}>{JobList.location}`</Text>

        <Text style={styles.jobType}>{JobList.WorkType}`</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
