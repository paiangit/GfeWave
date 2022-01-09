import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    flex: 1,
    height: 200,
  },
});

export default function () {
  return (
    <View style={styles.container}>
      <Text>
        Find Screen
      </Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://dss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/skin/71.jpg',
        }}
      />
    </View>
  );
};
