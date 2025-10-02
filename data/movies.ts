import { ImageSourcePropType } from "react-native";

export interface Movie {
  id: string;
  title: string;
  image: ImageSourcePropType;
  year?: string;
  duration?: string;
  rating?: string;
  description?: string;
  isNew?: boolean;
  size?: string;
  status?: string;
}

export const featuredContent: Movie = {
  id: "1",
  title: "Kuch Kuch Hota Hai",
  description: "Charming Feel-Good Dramedy Movie",
  image: require("../assets/filmes/kuchkuch.png"),
  year: "1998",
  duration: "2h 45m",
  rating: "PG"
};

export const movies: Movie[] = [
  { id: "1", title: "Money Heist", image: require("../assets/filmes/moneyheist.png") },
  { id: "2", title: "Peaky Blinders", image: require("../assets/filmes/peakyblinders.png") },
  { id: "3", title: "Stranger Things", image: require("../assets/filmes/strangerthings.png") },
  { id: "4", title: "The Witcher", image: require("../assets/filmes/witcher.png") },
  { id: "5", title: "Bridgerton", image: require("../assets/filmes/bridgerton.png") },
  { id: "6", title: "Dark", image: require("../assets/filmes/dark.png") },
  { id: "7", title: "Squid Game", image: require("../assets/filmes/squidgame.png") },
  { id: "8", title: "Lupin", image: require("../assets/filmes/lupin.png") }
];

export const newContent: Movie[] = [
  { id: "1", title: "The Night Agent", image: require("../assets/filmes/the-night-agent.png"), isNew: true },
  { id: "2", title: "Crash", image: require("../assets/filmes/crash.png"), isNew: true },
  { id: "3", title: "Squid Game", image: require("../assets/filmes/squidgame.png"), isNew: false },
  { id: "4", title: "Bheed", image: require("../assets/filmes/bheed.png"), isNew: true },
  { id: "5", title: "Hangover", image: require("../assets/filmes/hangover.png"), isNew: false },
  { id: "6", title: "Red Rose", image: require("../assets/filmes/redrose.png"), isNew: true }
];

export const downloadedContent: Movie[] = [
  { id: "1", title: "Stranger Things", image: require("../assets/filmes/strangerthings.png"), size: "2.1 GB", status: "Completo" },
  { id: "2", title: "The Witcher", image: require("../assets/filmes/witcher.png"), size: "1.8 GB", status: "Completo" },
  { id: "3", title: "Money Heist", image: require("../assets/filmes/moneyheist.png"), size: "3.2 GB", status: "Completo" },
  { id: "4", title: "Dark", image: require("../assets/filmes/dark.png"), size: "1.5 GB", status: "Completo" }
];

export const searchCategories = [
  { id: "1", title: "Tendências", items: [
    { id: "1", title: "Stranger Things", image: require("../assets/filmes/strangerthings.png") },
    { id: "2", title: "The Witcher", image: require("../assets/filmes/witcher.png") },
    { id: "3", title: "Money Heist", image: require("../assets/filmes/moneyheist.png") }
  ]},
  { id: "2", title: "Gêneros", items: [
    { id: "4", title: "Ação", image: require("../assets/filmes/peakyblinders.png") },
    { id: "5", title: "Comédia", image: require("../assets/filmes/bridgerton.png") },
    { id: "6", title: "Drama", image: require("../assets/filmes/dark.png") }
  ]}
];

export const categories = [
  { id: "1", title: "Em Alta", items: movies },
  { id: "2", title: "Minha Lista", items: movies },
  { id: "3", title: "Novidades", items: movies },
  { id: "4", title: "Tendências", items: movies }
];