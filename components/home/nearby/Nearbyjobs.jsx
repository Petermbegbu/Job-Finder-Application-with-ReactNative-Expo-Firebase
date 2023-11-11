import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import { COLORS } from "../../../constants";
import useFetch from "../../../hook/useFetch";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import styles from "./nearbyjobs.style";

const Nearbyjobs = () => {
  const router = useRouter();
  const { error, isLoading, JobList } = useFetch(5);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.tertiary} />
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          JobList?.map((item) => (
            <NearbyJobCard
              item={item}
              key={item.JobId}
              handleNavigate={() => router.push(`/job-details/${item.JobId}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
