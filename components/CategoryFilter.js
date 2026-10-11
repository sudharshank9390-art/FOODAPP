import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function CategoryFilter({ categories, selectedCategory, onSelect }) {
  return (
    <View style={styles.filterContainer}>
      {categories.map((category) => {
        const isSelected = category === selectedCategory;

        return (
          <Pressable
            key={category}
            onPress={() => onSelect(category)}
            style={[styles.filterButton, isSelected && styles.filterButtonSelected]}
          >
            <Text style={[styles.filterText, isSelected && styles.filterTextSelected]}>
              {category}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    marginBottom: 12,
    gap: 10,
  },
  filterButton: {
    backgroundColor: '#EEF3F1',
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  filterButtonSelected: {
    backgroundColor: '#D9E8DE',
    borderWidth: 1,
    borderColor: '#1F4D3E',
  },
  filterText: {
    color: '#2F3F3B',
    fontWeight: '600',
  },
  filterTextSelected: {
    color: '#1F4D3E',
  },
});
