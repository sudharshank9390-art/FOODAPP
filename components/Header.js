import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function Header({ onPressProfile }) {
  return (
    <View style={styles.header}>
      <View style={styles.brandContainer}>
        <Image
          source={require('../assets/little-lemon-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.brandText}>Little Lemon</Text>
      </View>

      <Pressable style={styles.profileButton} onPress={onPressProfile}>
        <Text style={styles.profileIcon}>👤</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 12,
    backgroundColor: '#F4F4F4',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  brandText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1B4D40',
  },
  profileButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#D7E8D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIcon: {
    fontSize: 20,
  },
});
