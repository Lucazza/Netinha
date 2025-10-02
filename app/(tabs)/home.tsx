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
import { featuredContent, categories, Movie, movies } from '../../data/movies'; 

const { height, width } = Dimensions.get('window');

// --- ESTRUTURA DE DADOS: NOVAS FILEIRAS ---
const customCategories = [
    { id: 900, title: 'Continuar Assistindo', items: movies }, 
    { id: 901, title: 'Lançamentos do Ano', items: movies },
    { id: 902, title: 'Programas de TV', items: movies },
    { id: 903, title: 'Suspense', items: movies },
    { id: 904, title: 'Seleção para você hoje', items: movies },
];
const allCategories = [...categories, ...customCategories]; 


export default function HomeScreen() {
  const renderMovieItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity style={styles.movieItem}>
      <Image source={item.image} style={styles.movieImage} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      
      {/* 1. HEADER E NAV BAR COMBINADOS E FLUTUANTES (Mantido flutuante, mas sem Nav Bar interna) */}
      <View style={styles.floatingHeaderWrapper}>
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

          {/* NAV BAR: AGORA MOVIDA PARA A POSIÇÃO CORRETA ABAIXO DESTE WRAPPER FLUTUANTE */}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Adiciona um espaçamento para o conteúdo começar abaixo do header flutuante */}
        <View style={{ height: 60 }} /> 

        {/* 2. NAV BAR (TV SHOWS/MOVIES/CATEGORIES) AGORA ABAIXO DO HEADER */}
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>TV Shows</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Categories</Text>
            <Ionicons name="chevron-down" size={16} color="#fff" style={styles.dropdownIcon} />
          </TouchableOpacity>
        </View>
        
        {/* 3. HERO/IMAGEM (PÔSTER GRANDE E CENTRALIZADO) */}
        <View style={styles.heroWrapper}>
            <View style={styles.featuredMovieBox}>
                <Image 
                    source={featuredContent.image} 
                    style={styles.heroImage} 
                    resizeMode='contain' // 👈 Importante: 'contain' para mostrar a imagem toda
                />
            </View>
            {/* O heroGradientOverlay e heroContent foram removidos daqui */}
        </View>

        {/* 4. BOTÕES (MY LIST/PLAY/INFO) ABAIXO DA IMAGEM */}
        <View style={styles.heroButtonsContainer}>
          {/* Título e descrição do filme */}
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

        {/* Renderiza TODAS as categorias */}
        {allCategories.map((category) => (
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
        <View style={{ height: 50 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  
  // --- HEADER: WRAPPER FLUTUANTE (MANTIDO) ---
  floatingHeaderWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10, 
    backgroundColor: 'rgba(0,0,0,0.3)', 
    paddingTop: 10, 
    paddingLeft: 10, 
  },
  
  // --- HEADER PRINCIPAL ---
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10, 
    paddingBottom: 5,
  },
  logo: { 
    width: 30, 
    height: 30, 
    resizeMode: 'contain' 
  },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  headerIcon: { marginLeft: 20, padding: 8 },

  // --- NAV BAR: (Não flutuante) ---
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20, // Espaço após a Nav Bar
  },
  navItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 5 },
  navText: { color: '#fff', fontSize: 16, fontWeight: '700' }, 
  dropdownIcon: { marginLeft: 4 },

  // --- HERO: IMAGEM (Pôster Grande) ---
  heroWrapper: {
    width: '100%',
    alignItems: 'center', // Centraliza o pôster
    marginBottom: 20,
  },
  featuredMovieBox: {
    width: width * 0.85, // Pôster mais estreito
    height: width * 1.3, // Altura maior de pôster
    position: 'relative', 
    overflow: 'hidden',
    // NOVO: margem removida e centralizada pelo heroWrapper
  },
  
  heroImage: { 
    width: '100%', 
    height: '100%', 
    resizeMode: 'contain', // 👈 SOLUÇÃO: 'contain' para mostrar a imagem toda
  },

  // Degradê removido pois não é mais necessário com a imagem em 'contain'
  
  // --- BOTÕES ABAIXO DA IMAGEM ---
  heroButtonsContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    marginTop: 0, // Botões aparecem logo abaixo do pôster
    zIndex: 5,
  },
  heroDescription: { // NOVO ESTILO: Título/Descrição do filme
      color: '#fff', 
      fontSize: 16, 
      marginBottom: 15, 
      textAlign: 'center' 
  },
  heroButtons: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
    width: '100%',
    maxWidth: 350,
  },
  myListButton: { alignItems: 'center', paddingVertical: 8 },
  myListText: { color: '#fff', fontSize: 12, marginTop: 4 },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 4
  },
  playButtonText: { color: '#000', fontSize: 16, fontWeight: 'bold', marginLeft: 8 },
  infoButton: { alignItems: 'center', paddingVertical: 8 },
  infoButtonText: { color: '#fff', fontSize: 12, marginTop: 4 },
  
  // --- SEÇÕES DE CONTEÚDO ---
  section: { marginBottom: 30, paddingLeft: 10 },
  sectionTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 15, paddingLeft: 10 },
  horizontalList: { paddingRight: 20 },
  movieItem: { marginRight: 8 },
  movieImage: { width: 120, height: 180, borderRadius: 4, backgroundColor: '#333' }
});