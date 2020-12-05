<template>
  <div class="container mb-4 mt-5">
	  <div class="row">
          <div class="col-md-4 col-12 mb-4 pb-4">
            <h4 class="text-left text-uppercase font-weight-bold text-dark">destinations</h4>  
          </div>
          <div class="col-md-4 col-12">
         <nav>
          <ul class="d-flex justify-content-between ">
           <li><a class="active" href="#">Vietnam</a></li>
           <li><a href="#">Myanmar</a></li>
           <li><a href="#">Thailand</a></li>
           <li><a href="#">Philippines</a></li>
          </ul>         
         </nav>
          </div>
          <div class="col-md-4 col-12">
            <h5>View all</h5>  
          </div>
	<div  class="col-11 d-block m-auto mt-4">	  
    <VueSlickCarousel  :dots="false" v-bind="settings" class="col-md-12 col-11">
	  <div class="card" v-for="data in datas" :key="data.id">
		  <div class="relative">			  
		  <img class="card-img-top" :src="data.img" width="50%" height="200px" alt="">
		  </div>
		  <div class="absolute">
			  <p class="card-text">{{data.text}}</p>
		  </div>
	  </div>	
	 
    </VueSlickCarousel>
	</div>
	</div>
  </div>
</template>
 
<script>
import destination from '../json/destination.json';
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data: function() {
      return {
		  
            datas :destination,
        settings: {
            "dots": false,
  "infinite": false,
  "speed": 500,
  "slidesToShow": 4,
  "slidesToScroll": 4,
  "initialSlide": 0,
  "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "infinite": true,
		"dots": true,
		"arrows":true,
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  ]
  
        },
      }
    },
  }
</script> 
<style >
.bg-primary{height:60%}
.relative{position: relative;}
.absolute{position: absolute;bottom: 0px;background-color: transparent ;width: 100%;background-image: linear-gradient(to right, #e9ecef, rgba(0,123,255,.25));}
p{text-align: center;margin: 6px;}
.slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: 0.75;
    color: black;
}
</style>