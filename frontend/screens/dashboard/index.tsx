import React from "react";

import { View, Text } from "react-native";

import { DefaultLayout } from "layouts/DefaultLayout";

import styles from "./styles";

const Dashboard = () => {
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

        <View style={styles.card}>
          <Text>My exercises</Text>
          {/* Add user exercises here */}
        </View>

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

export default Dashboard;
