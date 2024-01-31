import { createStackNavigator } from "@react-navigation/stack";

import Home from "screens/home";
import MyExercises from "screens/my-exercises";

const DashboardStack = createStackNavigator();

const DashboardNavigator = () => {
  return (
    <DashboardStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <DashboardStack.Screen name="Home" component={Home} />

      <DashboardStack.Screen name="MyExercises" component={MyExercises} />
    </DashboardStack.Navigator>
  );
};

export default DashboardNavigator;
