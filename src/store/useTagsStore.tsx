import { create } from 'zustand';
import {nanoid} from "nanoid";

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
  tags: [
    { name: "test", id: nanoid() },
  ],
  setNewTag: (newTag) => set({ tags: newTag }),
  removeTag: (id) => set((state) => ({
    tags: state.tags.filter(tag => tag.id !== id)
  }))
}));

export default useTagsStore;