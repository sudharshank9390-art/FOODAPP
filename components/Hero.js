import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';

export default function Hero({ searchText, onSearchChange }) {
  return (
    <View style={styles.heroWrapper}>
      <View style={styles.heroTextArea}>
        <Text style={styles.restaurantName}>Little Lemon</Text>
        <Text style={styles.location}>Chicago</Text>
        <Text style={styles.description}>
          Mediterranean-inspired cuisine crafted with fresh ingredients and warm hospitality.
        </Text>
      </View>

      <Image
        source={require('../assets/hero-restaurant.png')}
        style={styles.heroImage}
        resizeMode="cover"
      />

      <TextInput
        value={searchText}
        onChangeText={onSearchChange}
        style={styles.searchInput}
        placeholder="Search menu items"
        placeholderTextColor="#7F8C8D"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heroWrapper: {
    backgroundColor: '#1F4D3E',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 22,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 6,
  },
  heroTextArea: {
    marginBottom: 14,
  },
  restaurantName: {
    color: '#F4D35E',
    fontSize: 32,
    fontWeight: '700',
  },
  location: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
  },
  description: {
    color: '#EEF7F4',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
  },
  heroImage: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginBottom: 14,
  },
  searchInput: {
    backgroundColor: '#F4F5F5',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#1F1F1F',
  },
});
