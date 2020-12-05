<template>
  <div class="parent">
   <div class="row">
     <div class="col-md-6 col-12 first-child">
      <img src="img/destination7.jpg" width="100%" height="100%" >   
     </div>  
     <div class="col-md-6 col-12 second-child">
      <h2 class="text-uppercase text-left">Welcome </h2>   
      <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h5>
      <form method="POST" action="" class="form-login" v-on:submit.prevent="submit">
      <div class="col-12 mb-4">  
       <label class="font-weight-bold d-block text-left" for="email">Email Address:</label>   
       <input id="email" class="form-control" v-model.trim='$v.email.$model' :class="{'is-invalid': $v.email.$error, 'is-valid':!$v.email.$invalid }" type="email" placeholder="comany@company.com"
        v-model="email"
        name="email"> 
        <!-- <div class="valid-feedback">kj</div>  -->
        <div class="invalid-feedback">
            <span v-if="!$v.email.required">Email is required</span>
            <span v-if="!$v.email.minLength">email must be more then {{$v.email.$params.minLength.min}} characters</span>
        </div>
       </div>
      <div class="col-12 mb-2">  
       <label class="font-weight-bold d-block text-left" for="password">Password:</label>   
       <input id="password"  class="form-control" type="password" placeholder="8-20 Characters" v-model.trim='$v.password.$model' :class="{'is-invalid': $v.password.$error, 'is-valid':!$v.password.$invalid }" 
        v-model="password"
        name="password"> 
        <!-- <div class="valid-feedback">kj</div>  -->
        <div class="invalid-feedback">
            <span v-if="!$v.password.required">Password is required</span>
            <span v-if="!$v.password.minLength">Password must be more then {{$v.password.$params.minLength.min}} characters</span>
        </div> 
       </div>
       <div class="col-md-6 col-12">
        <button type="submit" class="bg-dark text-warning p-2">sign up</button>   
       </div>
       <div class="col-md-6 col-12 d-block ml-auto">
        <p>Already have an account? <span class="text-warning"><a href="/signup">sign in</a></span></p></div>
      </form>   
      
     </div>
   </div>   
  </div>
</template>
<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      email:''  ,
      password: '',
    }
  },
  validations: {
    email: {
      required,
      minLength: minLength(6)
    },
    password: {
      required,
      minLength: minLength(6)
    },
  },
  
    methods: {
        
        submit: function(){
            this.$v.$touch();
            if(this.$v.$pendding || this.$v.$error) return;
            alert("data submited")
        }
    },
}
</script>
<style lang="scss" scoped>
.parent{position:absolute;top:0; left : 0;bottom: 0; width:100%; height: 100%;}
.first-child{position: absolute;top: 0;height:100%; width: 50%;background-color: white;}
.second-child{position: absolute;top: 0;right:0;height:100%; width: 50%;}
</style>