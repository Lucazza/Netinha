// app/(tabs)/downloads.tsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { downloadedContent } from '../../data/movies';
import { Movie } from '../../src/types';

const { width } = Dimensions.get('window');

export default function DownloadsScreen() {
  const renderDownloadItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity style={styles.downloadItem}>
      <Image source={{ uri: item.image }} style={styles.downloadImage} />
      <View style={styles.downloadInfo}>
        <Text style={styles.downloadTitle}>{item.title}</Text>
        <Text style={styles.downloadSize}>{item.size}</Text>
        <View style={styles.downloadStatus}>
          <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
          <Text style={styles.downloadStatusText}>{item.status}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <Ionicons name="ellipsis-vertical" size={20} color="#b3b3b3" />
      </TouchableOpacity>
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
        <Text style={styles.title}>Downloads</Text>
        <Text style={styles.subtitle}>Seus downloads aparecerão aqui</Text>
        
        <FlatList
          data={downloadedContent}
          keyExtractor={(item) => item.id}
          renderItem={renderDownloadItem}
          contentContainerStyle={styles.downloadList}
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
  downloadList: {
    paddingBottom: 20
  },
  downloadItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15
  },
  downloadImage: {
    width: 80,
    height: 120,
    borderRadius: 6,
    backgroundColor: '#333'
  },
  downloadInfo: {
    flex: 1,
    marginLeft: 15
  },
  downloadTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  downloadSize: {
    color: '#b3b3b3',
    fontSize: 14,
    marginBottom: 8
  },
  downloadStatus: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  downloadStatusText: {
    color: '#4CAF50',
    fontSize: 14,
    marginLeft: 5
  },
  moreButton: {
    padding: 8
  }
});
