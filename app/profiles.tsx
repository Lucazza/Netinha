// app/profiles.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Profile } from '../src/types';


const NetflixLogo = require('../assets/images/n1 1.png');
const profiles: Profile[] = [
  { 
    id: "1", 
    name: "Lucas", 
    avatar: require("../assets/images/perfil azul escuro.png"),
    isAdd: false
  },
  { 
    id: "2", 
    name: "Ueider", 
    avatar: require("../assets/images/perfil vermelho.png"),
    isAdd: false
  },
  { 
    id: "3", 
    name: "Infantil", 
    avatar: require("../assets/images/perfil verde.png"),
    isAdd: false
  },
  { 
    id: "4", 
    name: "Convidado", 
    avatar: require("../assets/images/perfil amarelo.png"), 
    isAdd: false
  }
];

export default function ProfileSelectionScreen() {
  const router = useRouter();

  const handleProfileSelect = (item: Profile) => {
    router.replace('/(tabs)/home');
  };

  const renderProfile = ({ item }: { item: Profile }) => (
    <TouchableOpacity 
      style={styles.profileContainer} 
      onPress={() => handleProfileSelect(item)}
      activeOpacity={0.8}
    >
      <View style={styles.avatarContainer}>
        {item.avatar && (
          <Image
            source={item.avatar}
            style={styles.avatar}
            onError={() => console.log('Erro ao carregar imagem:', item.avatar)}
          />
        )}
      </View>
      <Text style={styles.profileName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        <View style={styles.logoContainer}>
          <Image
            source={NetflixLogo}
            style={styles.headerLogo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>Quem está assistindo?</Text>
        
        <FlatList
          data={profiles}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={renderProfile}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#000',
    paddingTop: 40, 
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', 
    paddingHorizontal: 20
  },
  
  logoContainer: {
    alignItems: 'center', 
    width: '100%',
    marginBottom: 40, 
  },
  
  headerLogo: {
    width: 120,
    height: 50,
  },
  
  title: { 
    color: '#fff', 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 50,
    textAlign: 'center'
  },
  list: { 
    justifyContent: 'center', 
    alignItems: 'center',
    paddingBottom: 40
  },
  profileContainer: { 
    alignItems: 'center', 
    margin: 20,
    width: 120
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 4,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    overflow: 'hidden'
  },
  avatar: { 
    width: 100, 
    height: 100, 
    borderRadius: 4
  },
  
  profileName: { 
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
});