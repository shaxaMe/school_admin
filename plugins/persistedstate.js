import createPersistedState from 'vuex-persistedstate'
const storage = window.localStorage
const storageKey = "DENT_UZ"
export default ({store}) => {
  createPersistedState({
      key: storageKey,
      storage: {
        getItem() { return storage.getItem(storageKey) },
        setItem: (key, value) => storage.setItem(key, value),
        removeItem: (key) => storage.removeItem(key)
      },
  })(store)
}
