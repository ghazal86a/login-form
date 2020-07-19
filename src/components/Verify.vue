<template>
  <div class="container">
    <div class="form">
      <div class="form-panel">
        <div class="form-header">
          <h1>Verify your Account</h1>
        </div>
        <div class="form-content">
          <div class="form-group">
            <p>
              Please select one of the contact methods below to recieve a code:
            </p>
            <input
              type="radio"
              id="mobile"
              name="contact"
              :value="contacts.mobile"
              v-model="picked"
            />
            <label for="mobile" v-if="contacts"
              >Mobile: {{ contacts.mobile }}</label
            ><br />
            <input
              type="radio"
              id="landline"
              name="contact"
              :value="contacts.landline"
              v-model="picked"
            />
            <label for="landline" v-if="contacts"
              >Landline: {{ contacts.landline }}</label
            >
            <br />
            <input
              type="radio"
              id="email"
              name="contact"
              :value="contacts.email"
              v-model="picked"
            />
            <label for="email" v-if="contacts"
              >Email: {{ contacts.email }}</label
            ><br />
          </div>
        </div>
      </div>
    </div>
    <div class="form verify" v-show="picked">
      <div class="form-panel">
        <div class="form-header">
          <h1>Enter your verification code below:</h1>
        </div>
        <div class="form-content">
          <div class="form-group">
            <label for="verify">Enter code</label>
            <input
              type="text"
              id="verify"
              name="verification-code"
              v-model="code"
              required
            />
          </div>
          <div class="form-group">
            <button type="submit" @click.stop.prevent="handleSubmit()">
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Verify",
  data() {
    return {
      picked: "",
      code: ""
    };
  },
  computed: {
    contacts() {
      return this.$store.state.userInfo[0];
    }
  },
  methods: {
    handleSubmit() {
      this.code === "0000"
        ? this.$router.push("/home")
        : this.$router.push("/not-verified");
    }
  }
};
</script>
