<template>
  <div id="boxSpace">
    <div class="text-uppercase fnt">join the wish-list.</div>
    <v-form>
      <v-row>
        <v-col>
          <v-text-field
            v-model="first"
            label="First Name"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="first"
            label="First Name"
            outlined
          ></v-text-field>
          <v-btn color="#6C63FF" class="fnt-p text-capitalize" dark>
            join us
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
    <Lottie
      :width="1024"
      :height="1024"
      :options="lottieOptions"
      v-on:animCreated="handleAnimation"
    />
  </div>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '~/assets/ani2.json'
export default {
  layout: 'reg',
   components: {
        Lottie
    },
  data() {
    return {
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default },
    }
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

#boxSpace {
  margin-top: 10%;
  margin-bottom: 10%;
}

.fnt {
  font-family: 'Poppins', sans-serif;
  font-size: 40px;
}

.fnt-p {
  font-family: 'Poppins', sans-serif;
}
</style>
