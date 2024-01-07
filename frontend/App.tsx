import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import TabsNavigator from 'navigation/Tabs';

import 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
};

export default App;
