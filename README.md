# Netflix Clone - React Native

Este projeto é um **clone completo da Netflix**, construído com **React Native** e **Expo**. Ele replica a interface e funcionalidades principais da Netflix, incluindo seleção de perfis, tela home, busca, novidades e downloads.

## 📱 Funcionalidades

### ✅ Implementadas
- **Tela de Splash** com logo Netflix e animação
- **Tela de Login** com design idêntico ao Netflix
- **Seleção de Perfis** com avatares e layout responsivo
- **Tela Home** com hero banner e seções de conteúdo
- **Tela de Busca** com categorias e funcionalidade de pesquisa
- **Tela de Novidades** com badges "NOVO"
- **Tela de Downloads** com lista de conteúdo baixado
- **Navegação por Abas** com ícones Netflix
- **Design Responsivo** e fiel ao original

### 🎨 Características Visuais
- **Cores**: Preto (#000), vermelho Netflix (#E50914), cinza (#b3b3b3)
- **Tipografia**: Fontes bold e modernas
- **Efeitos**: Gradientes, sombras, glassmorphism
- **Layout**: Responsivo e fiel ao design original

## 🛠 Tecnologias Utilizadas

- **React Native** - Framework principal
- **Expo** - Plataforma de desenvolvimento
- **TypeScript** - Tipagem estática
- **Expo Router** - Navegação
- **Expo Linear Gradient** - Gradientes
- **Ionicons** - Ícones

## 📁 Estrutura do Projeto

```
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   ├── home.tsx
│   │   ├── search.tsx
│   │   ├── newhot.tsx
│   │   └── downloads.tsx
│   ├── index.tsx
│   ├── login.tsx
│   ├── profiles.tsx
│   └── modal.tsx
├── assets/
│   ├── fonts/
│   └── images/
├── components/
│   ├── themed-text.tsx
│   ├── themed-view.tsx
│   └── ...
├── constants/
│   └── theme.ts
├── data/
│   └── movies.ts
├── hooks/
│   ├── use-color-scheme.ts
│   ├── use-color-scheme.web.ts
│   └── use-theme-color.ts
├── src/
│   └── types/
│       └── index.ts
└── ...
```

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar o projeto:**
   ```bash
   npm start
   ```

3. **Abrir no dispositivo:**
   - Escanear o QR code com o app Expo Go
   - Ou usar um emulador Android/iOS
   - Ou executar no navegador web

## 📱 Telas do App

### 1. Splash Screen
- Logo Netflix com animação
- Transição automática para login

### 2. Login
- Formulário de email e senha
- Design minimalista e elegante

### 3. Seleção de Perfis
- Grid de perfis com avatares
- Opção para adicionar novo perfil

### 4. Home
- Hero banner com filme em destaque
- Barra de navegação (TV Shows, Movies, Categories)
- Seções de conteúdo horizontal
- Botões de ação (My List, Play, Info)

### 5. Busca
- Campo de pesquisa
- Categorias de tendências e gêneros
- Resultados em grid

### 6. Novidades
- Lista de lançamentos
- Badges "NOVO" nos itens recentes

### 7. Downloads
- Lista de conteúdo baixado
- Informações de tamanho e status

## 🎯 Próximos Passos

- [ ] Implementar funcionalidade de reprodução
- [ ] Adicionar mais categorias de conteúdo
- [ ] Implementar sistema de favoritos
- [ ] Adicionar notificações push
- [ ] Melhorar performance e otimizações

## 📄 Licença

Este projeto é apenas para fins educacionais e de demonstração.

---

**Desenvolvido com ❤️ usando React Native e Expo**
