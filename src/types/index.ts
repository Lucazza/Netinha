export interface Profile {
  id: string;
  name: string;
  avatar: any;
  isAdd: boolean;
}

export interface Movie {
  id: string;
  title: string;
  image: string;
  year?: string;
  duration?: string;
  rating?: string;
  description?: string;
  isNew?: boolean;
  size?: string;
  status?: string;
}

export interface Category {
  id: string;
  title: string;
  items: Movie[];
}

export interface SearchCategory {
  id: string;
  title: string;
  items: Movie[];
}

export interface FeaturedContent {
  id: string;
  title: string;
  description: string;
  image: string;
  year: string;
  duration: string;
  rating: string;
}
