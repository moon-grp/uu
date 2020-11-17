<template>
  <div>
    <v-container>
      <div>
        <v-row class="centered">
          <v-card class="mx-auto pt-6" width="500" elevation="5" tile>
            <div class="mx-4">
              <v-textarea
                outlined
                name="input-7-4"
                label="pen it down"
                class="text-capitalize"
                color="#6C63FF"
              ></v-textarea>
            </div>
            <v-card-actions class="mr-2 mb-2">
              <v-spacer></v-spacer>
              <v-btn outlined class="text-capitalize" color="#6C63FF"
                >make a wish</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'reg',
  data() {
    return {}
  },
}
</script>

<style scoped>
.centered {
  position: fixed;
  top: 40%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
</style>
