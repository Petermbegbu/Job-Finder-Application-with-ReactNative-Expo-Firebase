import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";
import styles from "./popularjobs.style";

const Popularjobs = () => {
  const router = useRouter();
  const { error, isLoading, LatestJobs } = useFetch(5);
  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.JobId}`);
    setSelectedJob(item.JobId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Latest jobs</Text>
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
          <FlatList
            data={LatestJobs}
            keyExtractor={(item) => item.JobId}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
