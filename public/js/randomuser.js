var randomUser = new Vue({
  el: '#randomUserGen',
  data: {
    users: [
      {
      name: {
        first: "",
        last: ""
      },

      email: "",

      dob: {
        date: "",
        age: 0
      },

      picture: {
        large: "",
        medium: "",
        thumbnail: ""
      },

      nat: ""
    }
  ]

  },

methods: {              //where you store all the methods used in the application
  fetchUser() {     //definition of fetchPatients function
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(json => {randomUser.users = json.results})
  }
},

  created() {
    this.fetchUser();  // when my application is created, then call the fetch function
  }
});
