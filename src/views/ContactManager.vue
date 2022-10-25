<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Contact Manager
          <router-link to="/contacts/add" class="btn btn-success btn-sm">Add <i class="fa fa-plus-circle"></i></router-link>
        </p>
      </div>
    </div>
  </div>

<!--<pre>{{contacts}}</pre>-->
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="card my-2 list-group-item-success shadow-lg">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-4">
                  <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="icon" class="contact-image">
              </div>
              <div class="col-sm-7">
                <ul class="list-group mt-2">
                  <li class="list-group-item">Name: <span class="fw-bold">Name</span></li>
                  <li class="list-group-item">Email: <span class="fw-bold">Email</span></li>
                  <li class="list-group-item">Mobile: <span class="fw-bold">Mobile</span></li>
                </ul>
              </div>
              <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                  <router-link to="/contacts/view/:contactId" class="btn btn-warning my-1 btn-sm"><i class="fa fa-eye"></i></router-link>
                  <router-link to="/contacts/edit/:contactId" class="btn btn-primary my-1 btn-sm"><i class="fa fa-pen"></i></router-link>
                  <router-link to="/contacts/view/:contactId" class="btn btn-danger my-1 btn-sm"><i class="fa fa-trash"></i></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {ContactService} from "@/services/ContactService";

export default {
  name: "ContactManager",
  data: function(){
    return{
      loading: false, //loading GIF not active right now
      contacts: [], //main data
      errorMessage: null //if any error message
    }
  },
  create: async function(){//this is a lifecycle function
    try {
      // this.loading = true //when data will load, loading GIF not active right now
      let response = await ContactService.getAllContacts() //fetching data from API
      this.contacts = response.data
      // this.loading = false //when data loading finish,loading GIF not active right now

    }catch (error) {
      this.errorMessage = error
    }
  },
  methods: function(){

  }
}
</script>

<style scoped>

</style>