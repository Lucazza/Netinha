// app/(tabs)/newhot.tsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { newContent } from '../../data/movies';
import { Movie } from '../../src/types';

const { width } = Dimensions.get('window');

export default function NewHotScreen() {
  const renderContentItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity style={styles.contentItem}>
      <Image source={{ uri: item.image }} style={styles.contentImage} />
      {item.isNew && (
        <View style={styles.newBadge}>
          <Text style={styles.newBadgeText}>NOVO</Text>
        </View>
      )}
      <Text style={styles.contentTitle}>{item.title}</Text>
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
        <Text style={styles.title}>Novidades</Text>
        <Text style={styles.subtitle}>Os lançamentos mais quentes</Text>
        
        <FlatList
          data={newContent}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={renderContentItem}
          contentContainerStyle={styles.contentList}
          showsVerticalScrollIndicator={false}
        />
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
  content: {
    flex: 1,
    paddingHorizontal: 20
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8
  },
  subtitle: {
    color: '#b3b3b3',
    fontSize: 16,
    marginBottom: 30
  },
  contentList: {
    paddingBottom: 20
  },
  contentItem: {
    width: (width - 60) / 2,
    marginRight: 20,
    marginBottom: 20,
    position: 'relative'
  },
  contentImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    backgroundColor: '#333'
  },
  newBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#E50914',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4
  },
  newBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold'
  },
  contentTitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center'
  }
});
