// app/(tabs)/search.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { searchCategories } from '../../data/movies';
import { Movie, SearchCategory } from '../../src/types';

const { width } = Dimensions.get('window');

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  const renderSearchItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity style={styles.searchItem}>
      <Image source={{ uri: item.image }} style={styles.searchImage} />
      <Text style={styles.searchTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderCategoryItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/images/logonetflix2.png")} style={styles.logo} />
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>Buscar</Text>
        <Text style={styles.subtitle}>Encontre seus filmes e séries favoritos</Text>
        
        <View style={styles.categoriesContainer}>
          {searchCategories.map((category) => (
            <View key={category.id} style={styles.categorySection}>
              <Text style={styles.categorySectionTitle}>{category.title}</Text>
              <FlatList
                data={category.items}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderCategoryItem}
                contentContainerStyle={styles.categoryList}
              />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain'
  },
  profileButton: {
    padding: 8
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12
  },
  searchIcon: {
    marginRight: 10
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    color: '#808080',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30
  },
  searchResults: {
    paddingBottom: 20
  },
  searchItem: {
    width: (width - 60) / 2,
    marginRight: 20,
    marginBottom: 20
  },
  searchImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    backgroundColor: '#333'
  },
  searchTitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center'
  },
  categoriesContainer: {
    flex: 1
  },
  categorySection: {
    marginBottom: 30
  },
  categorySectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  categoryList: {
    paddingRight: 20
  },
  categoryItem: {
    marginRight: 15,
    alignItems: 'center'
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#333'
  },
  categoryTitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center'
  }
});
