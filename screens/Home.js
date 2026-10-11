import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Header from '../components/Header';
import Hero from '../components/Hero';
import CategoryFilter from '../components/CategoryFilter';
import MenuItem from '../components/MenuItem';
import { menuItems } from '../data/menuData';

const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks'];

export default function Home({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchText, setSearchText] = useState('');

  const filteredMenu = useMemo(() => {
    const searchTerm = searchText.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        !searchTerm || item.name.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchText]);

  return (
    <View style={styles.container}>
      <Header onPressProfile={() => navigation.navigate('Profile')} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Hero searchText={searchText} onSearchChange={setSearchText} />

        <Text style={styles.sectionTitle}>Order for delivery</Text>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {filteredMenu.length > 0 ? (
          filteredMenu.map((item) => <MenuItem key={item.id} item={item} />)
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>No matching dishes</Text>
            <Text style={styles.emptyText}>Try adjusting the search or choose a different menu category.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    paddingBottom: 26,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F4D3E',
    marginLeft: 16,
    marginBottom: 10,
  },
  emptyState: {
    marginHorizontal: 16,
    marginTop: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    borderWidth: 1,
    borderColor: '#E2E6E5',
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F4D3E',
    marginBottom: 6,
  },
  emptyText: {
    fontSize: 14,
    color: '#586563',
    lineHeight: 20,
  },
});
