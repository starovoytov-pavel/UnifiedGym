import React, { ReactNode } from "react";

import i18n from "i18next";
import { View } from "react-native";

import LanguageSelector, { Language } from "components/language-selector";

import styles from "./styles";

type LanguageCodes = {
  [key in Language]: string;
};
const languageCodes: LanguageCodes = {
  Eng: "en",
  Rus: "ru",
  Bel: "bel",
};

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  const handleLanguageChange = (languageCode: Language) => {
    i18n.changeLanguage(languageCodes[languageCode]);
  };

  return (
    <View style={styles.container}>
      <LanguageSelector onLanguageChange={handleLanguageChange} />

      <View style={{ flex: 1, margin: 0 }}>{children}</View>
    </View>
  );
};
