<template>
  <!-- Form-->
  <div class="form">
    <div class="form-panel">
      <div class="form-header">
        <h1>Account Login</h1>
      </div>
      <div class="form-content">
        <form @submit.prevent="checkForm">
          <div class="form-group">
            <label for="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Please enter your Last Name"
              v-model="lastName"
              required
            />
            <span class="form-error" v-if="errorMsg.lastName">{{
              errorMsg.lastName
            }}</span>
          </div>
          <div class="form-group">
            <label for="dob">Date of Birth</label>
            <datepicker
              v-model="dob"
              id="dob"
              name="dob"
              placeholder="Please select your DOB"
            ></datepicker>
          </div>
          <div class="form-group">
            <label for="postcode">Post Code</label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              placeholder="Please enter your Post Code"
              v-model="postCode"
              required
            />
            <span class="form-error" v-if="errorMsg.postCode">{{
              errorMsg.postCode
            }}</span>
          </div>
          <div class="form-group">
            <button type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Datepicker from "vuejs-datepicker";

export default {
  name: "Login",
  components: {
    Datepicker
  },
  data() {
    return {
      lastName: "",
      dob: "",
      postCode: "",
      errorMsg: {}
    };
  },
  watch: {
    lastName(value) {
      this.lastName = value;
      this.validateLastName(value);
    },
    postCode(value) {
      this.postCode = value;
      this.validatePostCode(value);
    }
  },
  computed: {},
  methods: {
    ...mapActions(["getUserContacts"]),

    validateLastName(value) {
      value.length < 50
        ? (this.errorMsg["lastName"] = "")
        : (this.errorMsg["lastName"] =
            "Last name should be less than 50 characters!");
    },

    validatePostCode(value) {
      // from https://andrewwburns.com/2018/04/10/uk-postcode-validation-regex/
      const pcRegex =
        "^(([A-Z][0-9]{1,2})|(([A-Z][A-HJ-Y][0-9]{1,2})|(([A-Z][0-9][A-Z])|([A-Z][A-HJ-Y][0-9]?[A-Z])))) [0-9][A-Z]{2}$";
      value.match(pcRegex)
        ? (this.errorMsg["postCode"] = "")
        : (this.errorMsg["postCode"] = "Not a Valid UK Post Code!");
    },

    checkForm(e) {
      if (
        Object.values(this.errorMsg).every(o => o === "") ||
        Object.keys(this.errorMsg).length === 0
      ) {
        const payload = {
          lastName: this.lastName,
          dob: this.dob,
          postCode: this.postCode
        };
        this.getUserContacts(payload);
        this.$router.push("/verify");
      } else {
        e.preventDefault();
      }
    }
  }
};
</script>

<style lang="scss"></style>
