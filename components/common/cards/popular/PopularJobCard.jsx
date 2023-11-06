import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
const logo = require("../../../../assets/favicon.png");

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image source={logo} resizeMode="contain" style={styles.logoImage} />
      </TouchableOpacity>

      <Text style={styles.companyName} numberOfLines={1}>
        {item.Company}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.JobTitle}
        </Text>
        <Text style={styles.location}>
          {`${item.location}, ${item.Country}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
