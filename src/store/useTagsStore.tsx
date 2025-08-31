import { create } from 'zustand';

type Tag = {
  id: string;
  name: string;
};

type TagsState = {
  tags: Tag[];
  setNewTag: (newTag: Tag[]) => void;
  removeTag: (id: string) => void;
};

const useTagsStore = create<TagsState>((set) => ({
  tags: JSON.parse(localStorage.getItem('tags') || '[]') as Tag[],
  setNewTag: (newTag) => set({ tags: newTag }),
  removeTag: (id) =>
    set((state) => ({
      tags: state.tags.filter((tag) => tag.id !== id),
    })),
}));

export default useTagsStore;
