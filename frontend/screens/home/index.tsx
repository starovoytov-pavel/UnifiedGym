import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { DefaultLayout } from "layouts/DefaultLayout";

import styles from "./styles";

const Home = ({ navigation }) => {
  return (
    <DefaultLayout>
      <>
        <View style={styles.card}>
          <Text>Progress and Statistics</Text>
          {/* Add graphs/progress indicators here */}
        </View>

        <View style={styles.card}>
          <Text>Schedule</Text>
          {/* Add a calendar/list of upcoming workouts here */}
        </View>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("MyExercises")}
        >
          <Text>My exercises</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text>My templates</Text>
          {/* Add user templates here */}
        </View>

        <View style={styles.card}>
          <Text>Messages/Notifications</Text>
          {/* Add notifications here */}
        </View>
      </>
    </DefaultLayout>
  );
};

export default Home;
