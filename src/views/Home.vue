<template>
  <div class="home">
    <navbar/>
    <header>
      <div class="container">
        
      <form class="d-flex row">
        <div class="icon-container d-flex col-lg-4 col-md-6 col-12 mb-2">
          <i class="fa fa-map-marker"></i>
          <input class="form-control " type="text" placeholder="Destinations">
        </div>
        <div class="icon-container d-flex  col-lg-4 col-md-6 col-12 mb-2">
          <i class="fa fa-calendar-alt"></i>
          <input class="form-control" type="text" placeholder="Check in - Check out">
        </div>
        <div class="icon-container d-flex  col-lg-4 col-md-6 col-12 mb-2">
          <i class="fa fa-user"></i>
          <input class="form-control" type="text" placeholder="0 Aldults -0 Child -0 Room">
        </div>
      </form>
      </div>
    </header>
    
    <promotions />
    <Slider/>
    

    <recomend />
    <Partner />
      <travelBlog />
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import travelBlog from "../components/travelBlog";
import Partner from "../components/Partner";
import Footer from "@/components/Footer.vue";
import Recomend from "@/components/recomend.vue";
import promotions from "../components/Promotions.vue";
import Slider from '@/components/slider.vue';
export default {
  name: "home",
  components: {
    travelBlog,
    Partner,
    Footer,
    Recomend,
    promotions,
    Slider,
    Navbar
  },
};
</script>
<style lang="scss" scoped>
* {
  font-size: 16px;
}
header {
  background-image: url("../../public/img/recomend2.jpg");background-repeat: no-repeat;background-size: cover;
  height: 70vh;
  position: relative;
  form {
    background-color: white;
    position: absolute;
    top: 90%;left: 35%;transform: translate(-35%,-90%);
    padding: 6px;
    i {
      padding: 10px;
      min-width: 50px;
      text-align: center;
    }
  }
  input {
    width: 100%;
    padding: 10px;
    outline: none;
  }
}
ul {
  list-style: none;
  display: inline;
  li {
    display: inline-block;
    padding: 4px;
    margin: 4px;
    a {
      text-decoration: none;
    }

    .active {
      padding-bottom: 4px;
      border-bottom: 2px solid red;
    }
  }
}
</style>
