import React from "react";

import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { NavigationContainer } from "@react-navigation/native";

import TabsNavigator from "navigation/Tabs";

import { store } from 'store/index';

import "react-native-gesture-handler";

import i18n from "./i18n";

const App = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <NavigationContainer>
          <TabsNavigator />
        </NavigationContainer>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
