<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Edit Contact</p>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="text" class="form-control" id="email" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="mobileNo" class="form-label">Mobile No.</label>
            <input type="number" class="form-control" id="mobileNo">
          </div>
          <button type="submit" class="btn btn-primary" value="update">Submit</button>
        </form>
      </div>
      <div class="col-md-2">
        <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="icon" class="contact-image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditComponent"
}
</script>

<style scoped>

</style>