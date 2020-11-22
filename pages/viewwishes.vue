<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="344"
      v-for="item in getWishes"
      :key="item._id.$oid"
    >
      <v-card-text>
        {{ item.wish }}
      </v-card-text>
      <v-card-actions>
        {{ item.name }}
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: 'reg',
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
