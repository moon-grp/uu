export default function ({ $axios, redirect }) {
   /* $axios.onError(error => {
      if(error.response.status === 500) {
        redirect('/sorry')
      }
    }) */
    var token = JSON.parse(localStorage.getItem('token'))
    $axios.setHeader('Authorization', `Bearer ${token}`)

    $axios.onError(error => {
        if(error.response.status === 401) {
          redirect('/signin')
        }
      })
  }