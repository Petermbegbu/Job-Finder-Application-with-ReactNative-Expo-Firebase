import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useGlobalSearchParams, useRouter } from "expo-router";

import { NearbyJobCard } from "../../components";
import useFetch from "../../hook/useFetch";
import { SIZES } from "../../constants";

const SearchPage = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();
  const { JobSearchList } = useFetch(null, null, params.id);

  return (
    <View style={styles.container}>
      {JobSearchList.length == 0 ? (
        <Text style={styles.title1}>
          Sorry!! No search result for{" "}
          <Text style={styles.title2}>"{params.id}"</Text>{" "}
        </Text>
      ) : (
        <View>
          <Text style={styles.title1}>
            Search result for <Text style={styles.title2}>"{params.id}"</Text>
          </Text>

          <View style={styles.listContainer}>
            <FlatList
              data={JobSearchList}
              keyExtractor={(item) => item.JobId}
              contentContainerStyle={{ columnGap: SIZES.medium }}
              ItemSeparatorComponent={
                <View style={{ borderBottomWidth: 1 }}></View>
              }
              vertical
              renderItem={({ item }) => (
                <NearbyJobCard
                  item={item}
                  key={item.JobId}
                  handleNavigate={() =>
                    router.push(`/job-details/${item.JobId}`)
                  }
                />
              )}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  title1: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },

  title2: {
    fontSize: 18,
    fontWeight: "bold",
  },

  listContainer: {
    padding: 2,
  },
});
