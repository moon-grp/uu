<template>
  <div>
    <v-row>
      <v-col cols="6" md="6" sm="12">
        <div id="boxSpace">
          <div class="trs fnt mb-5">
            join the <span class="coll">wish-list.</span>
          </div>

          <v-row>
            <v-col>
              <div>
                <v-text-field
                  outlined
                  label="Name"
                  prepend-inner-icon="mdi-account"
                  class="text-capitalize tf"
                  color="#6C63FF"
                  v-model="name"
                ></v-text-field>

                <v-text-field
                  outlined
                  label="Email"
                  prepend-inner-icon="mdi-email-outline"
                  class="text-capitalize tf"
                  color="#6C63FF"
                  v-model="email"
                ></v-text-field>

                <v-text-field
                  outlined
                  label="Password"
                  prepend-inner-icon="mdi-key"
                  class="text-capitalize tf"
                  color="#6C63FF"
                  v-model="password"
                ></v-text-field>
              </div>
              <v-btn color="#6C63FF" class="fnt-p trs" outlined dark>
                join us
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="6" md="6" sm="12">
        <div class="mx-auto">
          <Lottie
            :width="600"
            :height="500"
            :options="lottieOptions"
            v-on:animCreated="handleAnimation"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '~/assets/ani1.json'
export default {
  layout: 'reg',
  components: {
    Lottie,
  },
  data() {
    return {
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default },
      name: null,
      email: null,
      password: null,
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
  font-size: 35px;
}

.fnt-p {
  font-family: 'Poppins', sans-serif;
}

.trs {
  text-transform: capitalize;
}

.tf {
  border-radius: 10px;
}

.coll {
  color: #6c63ff;
  font-size: 50px;
}
</style>
