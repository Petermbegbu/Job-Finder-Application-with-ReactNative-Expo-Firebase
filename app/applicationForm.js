import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Image,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { router } from "expo-router";

import { firestoreDb, collection, addDoc } from "../Database/firebase";
import { COLORS } from "../constants";
import { DropdownPicker, FilePicker } from "../components";
import { serverTimestamp } from "firebase/firestore";
import { images } from "../constants";
import { useState } from "react";

const ApplicationForm = () => {
  const [isModalFeed, setIsModalFeed] = useState(false);

  const onFeedBackPress = () => {
    setIsModalFeed(false);
    router.push("/feedback");
  };

  const genderList = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().required().email(),
    gender: Yup.string().required(),
    address: Yup.string().required(),
    file: Yup.object().required(),
  });

  const handleJobSubmit = async (values, onSubmitProps) => {
    console.log("values", values);

    try {
      //   const docRef = await addDoc(collection(firestoreDb, "applicants"), {
      //     ...values,
      //     file: values.file.uri,
      //     timeStamp: serverTimestamp(),
      //   });
      //   console.log("Document written with ID: ", docRef.id);
      //   if (docRef?.id) {
      //     //if succesfull, reset the form and show modal link to feedback
      //     onSubmitProps.resetForm();
      //     setIsModalFeed(true);
      //   }
      setIsModalFeed(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          gender: "",
          address: "",
          file: null,
        }}
        onSubmit={handleJobSubmit}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleSubmit,
          setFieldValue,
          values,
          errors,
          isValid,
        }) => (
          <KeyboardAvoidingView style={styles.formContainer}>
            <View>
              <TextInput
                value={values.firstName}
                placeholder="First Name"
                onChangeText={handleChange("firstName")}
                style={styles.inputField}
              />
              <Text style={styles.errorText}>{errors.firstName}</Text>
            </View>
            <View>
              <TextInput
                value={values.lastName}
                placeholder="Last Name"
                onChangeText={handleChange("lastName")}
                style={styles.inputField}
              />
              <Text style={styles.errorText}>{errors.lastName}</Text>
            </View>
            <View>
              <TextInput
                value={values.email}
                placeholder="Email"
                onChangeText={handleChange("email")}
                keyboardType="email-address"
                style={styles.inputField}
              />
              <Text style={styles.errorText}>{errors.email}</Text>
            </View>
            <View>
              <DropdownPicker
                items={genderList}
                placeholder="Select Gender"
                onValueChange={handleChange("gender")}
                selectedValue={values.gender}
                style={styles.inputField}
              />
              <Text style={styles.errorText}>{errors.gender}</Text>
            </View>
            <View>
              <TextInput
                value={values.address}
                placeholder="Address"
                onChangeText={handleChange("address")}
                style={styles.inputField}
              />
              <Text style={styles.errorText}>{errors.address}</Text>
            </View>
            <View style={{ marginTop: 20, gap: 10, alignItems: "center" }}>
              <FilePicker
                style={styles.fileBtn}
                onSelectFile={(file) => setFieldValue("file", file[0])}
              />
              {values.file && (
                <>
                  <Text style={styles.fileName}>{values.file.name}</Text>

                  <TouchableOpacity>
                    <Text style={styles.viewCVBtn}>View CV</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>

            {isValid && (
              <TouchableOpacity
                onPress={handleSubmit}
                style={styles.buttonContainer}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            )}
          </KeyboardAvoidingView>
        )}
      </Formik>

      {isModalFeed && (
        <Modal
          visible={true}
          animationType="slide"
          presentationStyle="pageSheet"
        >
          <View style={styles.modal}>
            <Image
              source={images.success}
              resizeMode="cover"
              style={styles.successImg}
            />

            <TouchableOpacity
              onPress={onFeedBackPress}
              style={styles.feedBackBtn}
            >
              <Text style={styles.feedBackTextBtn}>Feedback</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default ApplicationForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  formContainer: {
    padding: 20,
    gap: 10,
  },

  inputField: {
    backgroundColor: "white",
    height: 40,
    borderRadius: 10,
    paddingLeft: 10,
  },

  buttonContainer: {
    backgroundColor: COLORS.tertiary,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },

  buttonText: {
    color: COLORS.white,
  },

  errorText: {
    color: "red",
    fontSize: 12,
    fontWeight: "bold",
  },

  fileName: {
    textAlign: "center",
  },

  fileBtn: {
    backgroundColor: "blue",
    color: "white",
    borderRadius: 10,
    padding: 10,
    width: "50%",
    textAlign: "center",
    width: 100,
    // margin: "auto",
  },

  viewCVBtn: {
    backgroundColor: "red",
    color: "white",
    borderRadius: 10,
    padding: 10,
    width: "50%",
    textAlign: "center",
    width: 100,

    // margin: "auto",
  },

  modal: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    shadowColor: "black",
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 6,
          height: 6,
        },
        shadowOpacity: 0.6,
      },
      android: {
        elevation: 10,
      },
    }),
  },

  successImg: {
    width: "100%",
  },

  feedBackBtn: {
    backgroundColor: COLORS.tertiary,
    padding: 10,
    borderRadius: 15,
    width: "100%",
  },

  feedBackTextBtn: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});
