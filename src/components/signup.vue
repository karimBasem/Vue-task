<template>
  <div class="parent">
    <div class="row">
      <div class="col-md-6 col-12 first-child"></div>
      <div class="col-md-6 col-12 second-child">
        <nav class="mt-8 row no-gutters justify-content-center mb-4">
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              class="nav-link active fs-20"
              id="nav-signin-tab"
              data-toggle="tab"
              href="#signinTab"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              >Sign in</a
            >
            <a
              class="nav-link fs-20"
              id="nav-signup-tab"
              data-toggle="tab"
              href="#signupTab"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
              >Sign up</a
            >
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <!-- start Sign in -->
          <div
            class="tab-pane fade show active row no-gutters align-items-center"
            id="signupTab"
            role="tabpanel"
            aria-labelledby="nav-signup-tab"
          >
            <h2 class="text-uppercase text-left mt-4">create new account</h2>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </h5>
            <form
              method="POST"
              action=""
              class="form-login"
              v-on:submit.prevent="submit"
            >
              <div class="col-12 mb-4">
                <label class="font-weight-bold d-block text-left" for="email"
                  >Email Address:</label
                >
                <input
                  id="email"
                  class="form-control"
                  v-model.trim="$v.email.$model"
                  :class="{
                    'is-invalid': $v.email.$error,
                    'is-valid': !$v.email.$invalid,
                  }"
                  type="email"
                  placeholder="comany@company.com"
                  v-model="email"
                  name="email"
                />
                <!-- <div class="valid-feedback">kj</div>  -->
                <div class="invalid-feedback">
                  <span v-if="!$v.email.required">Email is required</span>
                  <span v-if="!$v.email.minLength"
                    >email must be more then
                    {{ $v.email.$params.minLength.min }} characters</span
                  >
                </div>
              </div>
              <div class="col-12 mb-2">
                <label
                  class="font-weight-bold d-block text-left"
                  for="passwordSignup"
                  >Password:</label
                >
                <input
                  id="passwordSignup"
                  class="form-control"
                  type="password"
                  placeholder="8-20 Characters"
                  v-model.trim="$v.passwordSignup.$model"
                  :class="{
                    'is-invalid': $v.passwordSignup.$error,
                    'is-valid': !$v.passwordSignup.$invalid,
                  }"
                  v-model="passwordSignup"
                  name="passwordSignup"
                />
                <!-- <div class="valid-feedback">kj</div>  -->
                <div class="invalid-feedback">
                  <span v-if="!$v.passwordSignup.required"
                    >password is required</span
                  >
                  <span v-if="!$v.passwordSignup.minLength"
                    >password must be more then
                    {{
                      $v.passwordSignup.$params.minLength.min
                    }}
                    characters</span
                  >
                </div>
              </div>
              <div class="col-12 mb-4">
                <label class="font-weight-bold d-block text-left" for="conpass"
                  >Confirm Password:</label
                >
                <input
                  id="conpass"
                  class="form-control"
                  type="password"
                  placeholder="Confirm your password"
                  v-model.trim="$v.conpass.$model"
                  :class="{
                    'is-invalid': $v.conpass.$error,
                    'is-valid': !$v.conpass.$invalid,
                  }"
                />
                <div class="invalid-feedback">
                  <span v-if="!$v.conpass.sameAsPassword"
                    >Passwords must be identical</span
                  >
                  <tree-view
                    :data="$v"
                    :options="{ rootObjectKey: '$v', maxDepth: 2 }"
                  ></tree-view>
                </div>
              </div>
              <div class="col-md-6 col-12">
                <button type="submit" class="bg-dark text-warning p-2">
                  sign up
                </button>
              </div>
              <div class="col-md-6 col-12 d-block ml-auto">
                <p>
                  Already have an account?
                  <span class="text-warning"
                    ><a href="/signup">sign in</a></span
                  >
                </p>
              </div>
            </form>
          </div>
          <!--end sign up-->

          <div
            class="tab-pane fade"
            id="signinTab"
            role="tabpanel"
            aria-labelledby="nav-signin-tab"
          >
            <h2 class="text-uppercase text-left">Welcome</h2>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </h5>
            <form
              method="POST"
              action=""
              class="form-login"
              v-on:submit.prevent="submit"
            >
              <div class="col-12 mb-4">
                <label class="font-weight-bold d-block text-left" for="email"
                  >Email Address:</label
                >
                <input
                  id="email"
                  class="form-control"
                  v-model.trim="$v.emilLogin.$model"
                  :class="{
                    'is-invalid': $v.emilLogin.$error,
                    'is-valid': !$v.emilLogin.$invalid,
                  }"
                  type="emilLogin"
                  placeholder="comany@company.com"
                  v-model="emilLogin"
                  name="emilLogin"
                />
                <!-- <div class="valid-feedback">kj</div>  -->
                <div class="invalid-feedback">
                  <span v-if="!$v.emilLogin.required">Email is required</span>
                  <span v-if="!$v.emilLogin.minLength"
                    >email must be more then
                    {{ $v.emilLogin.$params.minLength.min }} characters</span
                  >
                </div>
              </div>
              <div class="col-12 mb-2">
                <label class="font-weight-bold d-block text-left" for="password"
                  >Password:</label
                >
                <input
                  id="password"
                  class="form-control"
                  type="password"
                  placeholder="8-20 Characters"
                  v-model.trim="$v.passwordLogin.$model"
                  :class="{
                    'is-invalid': $v.passwordLogin.$error,
                    'is-valid': !$v.passwordLogin.$invalid,
                  }"
                  v-model="passwordLogin"
                  name="passwordLogin"
                />
                <!-- <div class="valid-feedback">kj</div>  -->
                <div class="invalid-feedback">
                  <span v-if="!$v.passwordLogin.required"
                    >Password is required</span
                  >
                  <span v-if="!$v.passwordLogin.minLength"
                    >Password must be more then
                    {{
                      $v.passwordLogin.$params.minLength.min
                    }}
                    characters</span
                  >
                </div>
              </div>
              <div class="col-md-6 col-12">
                <button type="submit" class="bg-dark text-warning p-2">
                  sign in
                </button>
              </div>
              <div class="col-md-6 col-12 d-block ml-auto">
                <p>
                  don't have an account?
                  <span class="text-warning"
                    ><a href="/signup">sign up</a></span
                  >
                </p>
              </div>
            </form>
          </div>
        </div>
        <!--end parent-->
      </div>
    </div>
  </div>
</template>
<script>
import { required, sameAs, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      emilLogin: "",
      email: "",
      password: "",
      passwordLogin: "",
      passwordSignup: "",
      conpass: null,
    };
  },
  validations: {
    email: {
      required,
      minLength: minLength(6),
    },
    emilLogin: {
      required,
      minLength: minLength(6),
    },
    password: {
      required,
      minLength: minLength(8),
    },
    passwordLogin: {
      required,
      minLength: minLength(8),
    },
    passwordSignup: {
      required,
      minLength: minLength(8),
    },
    conpass: {
      sameAsPassword: sameAs("passwordSignup"),
    },
  },

  methods: {
    submit: function() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      alert("data submited");
    },
  },
};
</script>
<style lang="scss" scoped>
.parent {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
.first-child {
  position: fixed;
  top: 0;
  height: 100%;
  width: 50%;
  background-color: white;
  background-image: url("../../public/img/test2.jpg");
  background-size: cover;
  height: 100%;
  background-repeat: no-repeat;
}
.second-child {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
}
.active{border:none}
</style>
