export const actions = {
    async getWishes() {
      let res = await this.$axios.get(`https://thewishlist.herokuapp.com/api/v1/viewtree`)
      return res;
    },
    async signUp({commit}, credentials) {
        let res = await this.$axios.post(`https://thewishlist.herokuapp.com/api/v1/signup`, credentials)
        return res;
      }
  }

