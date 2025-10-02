// app/profiles.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Profile } from '../src/types';

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
    name: "Adicionar perfil", 
    avatar: null,
    isAdd: true
  }
];

export default function ProfileSelectionScreen() {
  const router = useRouter();

  const handleProfileSelect = (item: Profile) => {
    if (item.isAdd) {
      // Lógica para adicionar novo perfil
      return;
    }
    router.replace('/(tabs)/home');
  };

  const renderProfile = ({ item }: { item: Profile }) => (
    <TouchableOpacity 
      style={styles.profileContainer} 
      onPress={() => handleProfileSelect(item)}
      activeOpacity={0.8}
    >
          <View style={styles.avatarContainer}>
            {item.isAdd ? (
              <View style={styles.addIconContainer}>
                <Ionicons name="add" size={40} color="#fff" />
              </View>
            ) : item.avatar ? (
              <Image
                source={item.avatar}
                style={styles.avatar}
                onError={() => console.log('Erro ao carregar imagem:', item.avatar)}
              />
            ) : null}
          </View>
      <Text style={styles.profileName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
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
    backgroundColor: '#000'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  title: { 
    color: '#fff', 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 40,
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
  addIconContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
    borderStyle: 'dashed'
  },
  profileName: { 
    color: '#808080', 
    fontSize: 16,
    textAlign: 'center'
  }
});