import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  ScrollView, 
  SafeAreaView, 
  Dimensions, 
  TouchableOpacity 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { featuredContent, categories } from '../../data/movies';
import { Movie } from '../../data/movies';

const { height } = Dimensions.get('window');

export default function HomeScreen() {
  const renderMovieItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity style={styles.movieItem}>
      <Image source={item.image} style={styles.movieImage} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <Image 
            source={require("../../assets/images/logonetflix2.png")} 
            style={styles.logo} 
          />
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.headerIcon}>
              <Ionicons name="search" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIcon}>
              <Ionicons name="person" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.navBar}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>TV Shows</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Categories</Text>
            <Ionicons 
              name="chevron-down" 
              size={16} 
              color="#fff" 
              style={styles.dropdownIcon} 
            />
          </TouchableOpacity>
        </View>

        <View style={styles.heroContainer}>
          <Image source={featuredContent.image} style={styles.heroImage} />
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>{featuredContent.title}</Text>
            <Text style={styles.heroDescription}>{featuredContent.description}</Text>
            <View style={styles.heroButtons}>
              <TouchableOpacity style={styles.myListButton}>
                <Ionicons name="add" size={20} color="#fff" />
                <Text style={styles.myListText}>My List</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.playButton}>
                <Ionicons name="play" size={20} color="#000" />
                <Text style={styles.playButtonText}>Play</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.infoButton}>
                <Ionicons name="information-circle-outline" size={20} color="#fff" />
                <Text style={styles.infoButtonText}>Info</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {categories.map((category) => (
          <View key={category.id.toString()} style={styles.section}>
            <Text style={styles.sectionTitle}>{category.title}</Text>
            <FlatList
              data={category.items}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalList}
              renderItem={renderMovieItem}
            />
          </View>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    zIndex: 1
  },
  logo: { width: 120, height: 40, resizeMode: 'contain' },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  headerIcon: { marginLeft: 20, padding: 8 },
  navBar: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333'
  },
  navItem: { flexDirection: 'row', alignItems: 'center', marginRight: 30, paddingVertical: 8 },
  navText: { color: '#fff', fontSize: 16, fontWeight: '500' },
  dropdownIcon: { marginLeft: 4 },
  heroContainer: { height: height * 0.7, position: 'relative', marginBottom: 20 },
  heroImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  heroContent: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    padding: 20, paddingBottom: 40,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  heroTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 8, textAlign: 'center' },
  heroDescription: { color: '#fff', fontSize: 14, marginBottom: 20, textAlign: 'center' },
  heroButtons: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  myListButton: { alignItems: 'center', paddingVertical: 8 },
  myListText: { color: '#fff', fontSize: 12, marginTop: 4 },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 4
  },
  playButtonText: { color: '#000', fontSize: 16, fontWeight: 'bold', marginLeft: 8 },
  infoButton: { alignItems: 'center', paddingVertical: 8 },
  infoButtonText: { color: '#fff', fontSize: 12, marginTop: 4 },
  section: { marginBottom: 30, paddingLeft: 20 },
  sectionTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  horizontalList: { paddingRight: 20 },
  movieItem: { marginRight: 10 },
  movieImage: { width: 130, height: 195, borderRadius: 8, backgroundColor: '#333' }
});