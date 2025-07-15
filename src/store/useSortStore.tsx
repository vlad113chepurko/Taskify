import {create} from 'zustand';

type Sort = {
  sortMethod:  string;
  setSortMethod: (sortMethod: string) => void;
}

const useSortStore =
  create<Sort>((set) => ({
    sortMethod: "",
    setSortMethod: (sort: string) => {
      set({sortMethod: sort})
    }
  }));

export default useSortStore;