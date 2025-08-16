import { create } from 'zustand'

interface MangaStore {
    MangaList: any[];
    pagination: any[];
    getMangaList: (page: number) => Promise<any>;


    mangaDetails: any;
    getMangaDetails: (manga: string) => Promise<any>;

    mangaChapter: any;
    getMangaChapter: (manga: string, chapter: string) => Promise<any>;

    genres: any;
    getMangaGenres: () => Promise<any>;

    genreManga: any;
    setMangaGenres: (genre: string, page: string) => Promise<any>
}

const useMangaStore = create<MangaStore>((set, get) => ({
    MangaList: [],
    pagination: [],

    getMangaList: async (page) => {
        try {
            const res = await fetch(`/api/manga-list/${page}`);
            const data = await res.json();

            if (!res.ok) {
                console.error('Manga-list error');
                return { error: true };
            }

            set({ MangaList: data?.data });
            set({ pagination: data?.pagination })

            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    mangaDetails: [],
    getMangaDetails: async (manga) => {
        try {
            const res = await fetch(`/api/manga-details/${manga}`);
            const data = await res.json();

            if (!res.ok) {
                console.error('Manga-list error');
                return { error: true };
            }

            set({ mangaDetails: data });
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    mangaChapter: [],
    getMangaChapter: async (manga, chapter) => {
        try {
            const res = await fetch(`/api/manga-details/${manga}/${chapter}`);
            const data = await res.json();

            if (!res.ok) {
                console.error('Manga-list error');
                return { error: true };
            }

            set({ mangaChapter: data });
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    genres: [],
    getMangaGenres: async () => {
        try {
            const res = await fetch(`/api/genre`);
            const data = await res.json();

            if (!res.ok) {
                console.error('Manga-list error');
                return { error: true };
            }


            set({ genres: data.genre });
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    genreManga: [],
    setMangaGenres: async (genre, page) => {
        try {
            const res = await fetch(`/api/genre/${genre}/${page}`);
            const data = await res.json();

            if (!res.ok) {
                console.error('Manga-list error');
                return { error: true };
            }
      
            set({ genreManga: data });
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },

}));

export default useMangaStore;
