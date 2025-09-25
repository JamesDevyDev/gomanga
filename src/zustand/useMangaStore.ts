import { create } from 'zustand'

interface MangaStore {
    MangaList: any[];
    pagination: any[];
    getMangaList: (page: number) => Promise<any>;


    mangaDetails: any;
    getMangaDetails: (manga: string) => Promise<any>;

    mangaChapter: any;
    getMangaChapter: (manga: string, chapter: string) => Promise<any>;

    genreManga: any;
    setMangaGenres: (genre: string, page: string) => Promise<any>

    searchManga: any;
    setSearchManga: (search: string) => Promise<any>

    // For sites count
    visitCount: number,
    getVisitCount: () => void,
    readCount: number,
    getReadCount: () => void
}

const useMangaStore = create<MangaStore>((set, get) => ({
    MangaList: [],
    pagination: [],

    getMangaList: async (page) => {
        try {
            const res = await fetch(`/api/manga/manga-list/${page}`);
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
            const res = await fetch(`/api/manga/manga-details/${manga}`);
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
            const res = await fetch(`/api/manga/manga-details/${manga}/${chapter}`);
            const data = await res.json();

            if (!res.ok) {
                // console.error('Manga-list error');
                return { error: true };
            }

            set({ mangaChapter: data });
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    genreManga: [],
    setMangaGenres: async (genre, page) => {
        try {
            const res = await fetch(`/api/manga/genre/${genre}/${page}`);
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

    searchManga: [],
    setSearchManga: async (search) => {
        try {
            const res = await fetch(`/api/manga/search/${search}`);
            const data = await res.json();

            if (!res.ok) {
                console.error('Manga-list error');
                return { error: true };
            }

            set({ searchManga: data });
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    // For sites count
    visitCount: 0,
    getVisitCount: async () => {
        let res = await fetch('/api/site/count/visit')
        if (!res.ok) throw new Error("Failed to fetch visit count");
        let data = await res.json()
        set({ visitCount: data })
    },
    readCount: 0,
    getReadCount: async () => {
        let res = await fetch('/api/site/count/read')
        if (!res.ok) throw new Error("Failed to fetch read count");
        let data = await res.json()
        set({ readCount: data })
    },


}));

export default useMangaStore;
