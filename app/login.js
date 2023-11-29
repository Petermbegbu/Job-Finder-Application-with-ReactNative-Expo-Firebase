import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { router } from "expo-router";

import { auth } from "../Database/firebase";
import { COLORS } from "../constants";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().min(4).required().label("Password"),
});

const Login = () => {
  const handleLogin = async (values, onSubmitProps) => {
    const { email, password } = values;

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      router.push("/");

      console.log("login user", user);
    } catch (error) {
      console.log("firebase error", error.message);

      if (error.code.toString().includes("invalid")) {
        onSubmitProps.setFieldError("password", "Invalid Credentials.");
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <KeyboardAvoidingView style={styles.formContainer}>
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
          </KeyboardAvoidingView>
        )}
      </Formik>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text style={{}}>Don't have an account</Text>
        <Text
          style={{
            color: COLORS.tertiary,
            fontWeight: "bold",
            paddingLeft: 10,
          }}
          onPress={() => router.push("/register")}
        >
          Register
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    // backgroundColor: "#dddddd",
  },

  formContainer: {
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
