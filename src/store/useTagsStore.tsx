import { create } from 'zustand';

type Tag = {
  id: number;
  name: string;
};

type TagsState = {
  tags: Tag[];
  setNewTag: (newTag: Tag[]) => void;
};

const useTagsStore = create<TagsState>((set) => ({
  tags: [],
  setNewTag: (newTag) => set({ tags: newTag }),
  removeTag: (id: number) => set((state) => ({
    tags: state.tags.filter(tag => tag.id !== id)
  }))
}));

export default useTagsStore;
