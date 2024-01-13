import React from "react";

import { View, Text } from "react-native";
import CountryFlag from "react-native-country-flag";
import SelectDropdown from "react-native-select-dropdown";

import BelarusFlag from "components/belarus-flag";

export type Language = "Eng" | "Rus" | "Bel";
const languages: Language[] = ["Eng", "Rus", "Bel"];

const ISOFlag = {
  "Eng": "GB",
  "Rus": "RU",
  "Bel": "BY"
}

const LanguageSelector = ({ onLanguageChange }: any) => {
  return (
    <SelectDropdown
      data={languages}
      renderCustomizedRowChild={(item) => {
        if (item === "Bel") {
          return <BelarusFlag />;
        } else {
          return (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CountryFlag isoCode={ISOFlag[item]} size={25} />

              <Text style={{ marginLeft: 10 }}>{item}</Text>
            </View>
          );
        }
      }}
      onSelect={(selectedItem) => onLanguageChange(selectedItem)}
    />
  );
};

export default LanguageSelector;
