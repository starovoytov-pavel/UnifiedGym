import React from 'react';

import { View, Text } from 'react-native';

import styles from '../styles/Dashboard';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.card}>
        <Text>Workout Progress</Text>
        {/* Add graphs/progress indicators here */}
      </View>

      <View style={styles.card}>
        <Text>Schedule</Text>
        {/* Add a calendar/list of upcoming workouts here */}
      </View>

      <View style={styles.card}>
        <Text>Statistics</Text>
        {/* Add notifications here */}
      </View>

      <View style={styles.card}>
        <Text>Messages/Notifications</Text>
        {/* Add notifications here */}
      </View>
    </View>
  );
};

export default Dashboard;
