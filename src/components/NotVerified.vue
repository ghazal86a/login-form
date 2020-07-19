<template>
  <div class="container">
    <div class="form">
      <div class="form-panel">
        <div class="form-header">
          <h1>Sorry! There seems to be a problem!</h1>
          <p>You probably entered a wrong verification code!😬</p>
          <p>
            But don't worry! You can go back to the login page and try again!👇
          </p>
          <p><router-link to="/">Login</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotVerified"
};
</script>
