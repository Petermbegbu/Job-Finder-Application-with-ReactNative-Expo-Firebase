import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";

import { COLORS } from "../constants";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().min(4).required().label("Password"),
});

const Register = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <SafeAreaView style={styles.container}>
          <View>
            <TextInput
              value={values.name}
              placeholder="name"
              onChangeText={handleChange("name")}
              style={styles.inputField}
              autoCapitalize="words"
            />
            <Text style={styles.errorText}>{errors.name}</Text>
          </View>

          <View>
            <TextInput
              value={values.email}
              placeholder="email"
              onChangeText={handleChange("email")}
              keyboardType="email-address"
              style={styles.inputField}
            />
            <Text style={styles.errorText}>{errors.email}</Text>
          </View>

          <View>
            <TextInput
              value={values.password}
              placeholder="password"
              onChangeText={handleChange("password")}
              secureTextEntry={true}
              style={styles.inputField}
            />
            <Text style={styles.errorText}>{errors.password}</Text>
          </View>
          <TouchableOpacity
            onPress={handleSubmit}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#dddddd",
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
  },

  buttonText: {
    color: COLORS.white,
  },

  errorText: {
    color: "red",
    fontSize: 12,
    fontWeight: "bold",
  },
});
