import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

let store = (set) => ({
  people: ['Anup', 'Akhil'],
  addPerson: (person) =>
    set((state) => ({ people: [...state.people, person] })),
});

store = persist(store);

const useStore = create(devtools(store));

export default useStore;
