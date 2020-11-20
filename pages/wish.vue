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
                v-model="wish"
                :error-messages="wishError"
                @input="$v.wish.$touch()"
                @blur="$v.wish.$touch()"
              ></v-textarea>
            </div>
            <v-card-actions class="mr-2 mb-2">
              <v-spacer></v-spacer>
              <v-btn outlined class="text-capitalize" @click="makeAWish" color="#6C63FF"
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
import { validationMixin } from 'vuelidate'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
export default {
  layout: 'reg',
  mixins: [validationMixin],

  validations: {
    wish: { required },
  },
  data() {
    return {
      loading: false,
      wish: null,
    }
  },
  mounted() {
    this.makeAWish()
  },
  methods: {
    async makeAWish() {
      //console.log(JSON.parse(localStorage.getItem('token')))

      try {
        this.loading=true
        var token = JSON.parse(localStorage.getItem('token'))
        this.$axios.setHeader('Authorization', token)
        const res = await this.$axios.$post(
          'https://thewishlist.herokuapp.com/api/v1/wishit',
          {
            wish:this.wish
          }
        )
        console.log(res)
        this.loading=false
      } catch (error) {
        console.log(error)
        this.loading=false
      }
    },
  },
  computed: {
    wishError() {
      const errors = []
      if (!this.$v.wish.$dirty) return errors
      !this.$v.wish.required &&
        errors.push('Aboii, you gatz wish something na...')
      return errors
    },
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
