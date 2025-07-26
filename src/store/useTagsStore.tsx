import { create } from 'zustand';
import {nanoid} from "nanoid";

type Tag = {
  id: string;
  name: string;
};

type TagsState = {
  tags: Tag[];
  setNewTag: (newTag: Tag[]) => void;
};

const useTagsStore = create<TagsState>((set) => ({
  tags: [
    { name: 'work', id: nanoid() },
    { name: 'workout', id: nanoid() },
    { name: 'school', id: nanoid() }
  ],
  setNewTag: (newTag) => set({ tags: newTag }),
  removeTag: (id: string) => set((state) => ({
    tags: state.tags.filter(tag => tag.id !== id)
  }))
}));

export default useTagsStore;
