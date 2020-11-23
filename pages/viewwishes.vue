<template>
  <div>
    <v-container>
      <v-row class="mt-8">
        <v-col cols="3" v-for="item in getWishes" :key="item._id.$oid">
          <v-card class="mb-4" max-width="344" elevation="16" shaped>
            <v-card-text class="text-capitalize subtitle-1">
              <div class="txt">
                {{ item.wish }}
              </div>
            </v-card-text>
            <v-card-actions class="text-capitalize overline ml-2">
              {{ item.name }}
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'view',
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    const getWishes = await $axios.$get(
      'https://thewishlist.herokuapp.com/api/v1/viewtree'
    )

    return { getWishes }
  },
}
</script>

<style scoped>
.txt {
  color: #6c63ff;
}
</style>
