import React, { useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsScreen from './NewsScreen.jsx';
import FindScreen from './FindScreen.jsx';

const TabNav = createBottomTabNavigator();
const INIT_ROUTE_NAME = 'News';
const styles = StyleSheet.create({
  tab: {
    paddingBottom: 5,
    color: 'red',
  },
  tabNav: {
    padding: 50,
  }
});

function getTitleByRoute(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INIT_ROUTE_NAME;
  if (routeName === 'News') return '新闻';
  if (routeName === 'Find') return '发现';
}

export default function({ navigation, route }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: getTitleByRoute(route),
    });
  }, [route]);

  return (
    <TabNav.Navigator
      style={styles.tabNav}>
      <TabNav.Screen
        name="News"
        style={styles.tab}
        options={{
          title: "新闻",
          tabBarIcon: ({ focused }) => {
            return null;
          },
        }}
        component={NewsScreen}
      />

      <TabNav.Screen
        name="Find"
        style={styles.tab}
        options={{
          title: "发现",
          tabBarIcon: ({ focused }) => {
            return null;
          },
        }}
        component={FindScreen}
      />
    </TabNav.Navigator>
  );
};
