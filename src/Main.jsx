import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions, Text } from "react-native";

import Explore from "./screens/Explore";
import Following from "./screens/Following";

import useFont from "./hooks/useFont.hook";
import usePalette from "./hooks/usePalette.hook";
import { bottomRouterTaps } from "./constants/bottom-router-taps";

const { height, width } = Dimensions.get("window");

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomRouter = () => {
  const Palette = usePalette();
  const Font = useFont();
  const bottomRouterOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let tabName = route.name;
      let tabIcon;
      bottomRouterTaps.map((tab) => {
        switch (tabName) {
          case tab.name:
            tabIcon = focused ? tab.iocnFocus : tab.iconNoFocus;
        }
      });
      return (
        <MaterialCommunityIcons
          name={tabIcon}
          size={30}
          color={focused ? Palette.Primary2 : Palette.SecDark}
        />
      );
    },
    tabBarLabel: ({ focused }) => {
      let routeName = route.name;
      let routeLabel;
      bottomRouterTaps.map((tab) => {
        switch (routeName) {
          case tab.name:
            routeLabel = tab.label;
        }
      });
      return (
        <Text
          style={{
            fontFamily: Font.Regular,
            fontSize: 11,
            color: focused ? Palette.Primary2 : Palette.SecDark,
          }}
        >
          {routeLabel}
        </Text>
      );
    },
    tabBarItemStyle: { paddingVertical: 10 },
    tabBarStyle: {
      shadowColor: "transparent",
      height: height * 0.09,
    },
    tabBarHideOnKeyboard: true,
  });

  return (
    <Tab.Navigator screenOptions={bottomRouterOptions}>
      {bottomRouterTaps.map((tab) => {
        return (
          <Tab.Screen
            key={tab._id}
            name={tab.name}
            component={tab.component}
            options={{ headerShown: false }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomRouter"
          component={BottomRouter}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Following" component={Following} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
