import { View, SafeAreaView, ScrollView, RefreshControl } from "react-native";
import { useState } from "react";
import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { COLORS, SIZES, icons } from "../../constants";
import {
  Company,
  ScreenHeaderBtn,
  JobTabs,
  Specifics,
  JobAbout,
  Responsibility,
  JobFooter,
} from "../../components";
import useFetch from "../../hook/useFetch";
const logo = require("../../assets/favicon.png");

const tabs = ["Job Description", "Qualifications", "Responsibilities"];

const JobDetails = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { jobDetail } = useFetch(0, params.id);

  const onRefresh = () => {};

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            skills={jobDetail.skills ?? ["N/A"]}
            experience={jobDetail.Experience}
            qualification={jobDetail.Qualifications}
          />
        );

      case "Job Description":
        return (
          <JobAbout
            title="Description"
            info={jobDetail.JobDescription ?? "No data provided"}
          />
        );

      case "Responsibilities":
        return (
          <Responsibility
            title="Responsibilities"
            responsibility={jobDetail.Responsibilities ?? "No data provided"}
          />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "Job Details",
        }}
      />

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company
              companyLogo={logo}
              jobTitle={jobDetail.JobTitle}
              companyName={jobDetail.Company}
              location={jobDetail.location}
              country={jobDetail.Country}
            />

            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {displayTabContent()}
          </View>
        </ScrollView>

        <JobFooter />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
