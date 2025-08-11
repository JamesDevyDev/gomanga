import { create } from 'zustand'

interface MangaStore {
    MangaList: any[];
    pagination: any[];
    getMangaList: (page: number) => Promise<any>;
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
    }
}));

export default useMangaStore;
