import React from "react";

import { I18nextProvider } from "react-i18next";
import { NavigationContainer } from "@react-navigation/native";

import TabsNavigator from "navigation/Tabs";

import "react-native-gesture-handler";

import i18n from "./i18n";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <TabsNavigator />
      </NavigationContainer>
    </I18nextProvider>
  );
};

export default App;
