import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Landing from "../pages/LandingPage";
import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegistrationForm";
import Home from "../pages/HomePage";

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          options={{ headerShown: false }}
          name="Landing"
          component={Landing}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginForm}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegisterForm}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}