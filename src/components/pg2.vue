<template>
<div>
    <Navbar/>
  <div class="container mb-4 ">
	  <div class="row mt-4">
     <div class="col-11 d-block m-auto">     
    <VueSlickCarousel  :dots="true" v-bind="settings" class="col-lg-12 col-11 mb-4">
          <div class="card">
          <img class="card-img-top" src="img/destination1.jpg" width="200px" height="400px" alt="">
      </div>
        <div class="card">
          <img class="card-img-top" src="img/destination2.jpg" width="200px" height="400px" alt="">
      </div>
        <div class="card">
          <img class="card-img-top" src="img/destination3.jpg" width="200px" height="400px" alt="">
      </div>
	 
    </VueSlickCarousel>
     </div>
    <div class="col-md-8 col-12 mt-5">
     <h2 class="mb-4">Family Safari Vacation To The Home Of The Gods</h2> 
     <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/> <br/> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic</p> 
      
     <div class="col-11 d-block m-auto mt-4">     
    <VueSlickCarousel  :dots="true" v-bind="settings" class="col-lg-12 col-11 mb-4">
          <div class="card">
          <img class="card-img-top" src="img/destination1.jpg" width="200px" height="300px" alt="">
      </div>
        <div class="card">
          <img class="card-img-top" src="img/destination2.jpg" width="200px" height="300px" alt="">
      </div>
        <div class="card">
          <img class="card-img-top" src="img/destination3.jpg" width="200px" height="300px" alt="">
      </div>
	 
    </VueSlickCarousel>
     </div>
    </div>
    <div class="col-md-4 col-12 mt-5 "> 
     <div class="col-12 no-gutters bg-dark p-2">
      <h3 class="text-white text-left">Book your room now</h3>   
     </div>   
     <div class="border">
     <div class="mt-4">
      <h4 class="text-left font-weight-bold">Tourist Information</h4>       
      <h5 class="text-left mt-2"> Nationality</h5>  
     </div>
     <div class="row">
     <div class="col-6">
      <button class="btn btn-main text-white bg-y mt-2 d-block mr-auto">local Team</button>
     </div>
     <div class="col-6">
      <button class=" btn btn-light">Foreign Tourist</button>
     </div>     
     </div>
     <form>
      <div class="row">   
      <div class="col-6 mt-2">
       <label class="text-left d-block" for="check-in">Check-in</label>   
       <input id="check-in" class="form-control" type="text" placeholder="Select Date">
      </div>   
      <div class="col-6 mt-2">
       <label class="text-left d-block" for="time">Time</label>        
         <select class="form-control" name="" id="">
          <option value="">1:30 AM</option>
          <option value="">2:30 AM</option>
          <option value="">3:30 AM</option>
         </select>
      </div> 
       
      <div class="col-6 mt-2">
       <label class="text-left d-block" for="check-in">Check-out</label>   
       <input id="check-out" class="form-control" type="text" placeholder="Select Date">
      </div>   
      <div class="col-6 mt-2">
       <label class="text-left d-block" for="time">Time</label>        
         <select class="form-control" name="" id="">
          <option value="">0:00 AM</option>
          <option value="">2:30 AM</option>
          <option value="">3:30 AM</option>
         </select>
      </div> 
      </div>     
          
      <div class="row mt-2">  
       <h4 class="text-left font-weight-bold pl-4"> Contact information</h4>
       <div class="col-12 mt-2">
        <label for="name" class="text-left d-block mb-2">First and last name<span class="text-danger">*</span></label>
        <input id="name" class="form-control" type="text" placeholder="Enter your first and last name">   
       </div>
       <div class="col-12 mt-2">
        <label for="email" class="text-left d-block mb-2">Email<span class="text-danger">*</span></label>
        <input id="email" class="form-control" type="text" placeholder="Enter your f email">   
       </div>
       <div class="col-12 mt-2">
        <label for="phone" class="text-left d-block mb-2">Phone Number<span class="text-danger">*</span></label>
        <input id="phone" class="form-control" type="text" placeholder="Enter your Phone number">   
       </div>       
       <div class="col-12">
        <button class="btn btn-main text-white bg-y mt-2 ">Book now</button>
       </div>
      </div>  
     </form>
     </div>
    </div>    
    <div class="col-lg-8 col-12 mb-4 mt-4">
      <h4 class="font-weight-bold text-left mb-4">GUESTS SERVICES OF SUN TRAVEL</h4>
      <p class="text-left">Reservation and ticketing by phone, email from 8:00 to 18:30 on weekdays (including Holidays  and New Year).
      Free ticket delivery in the city.
      Free advice on the best flight routes with the most suitable price.
      Advice on participation and benefit from frequent flyer programs of airlines such as: Golden Lotus Plus, Asia  Miles, Royal Orchid Plus ...
      Support changing date, time of flight, refund tickets quickly and conveniently.</p>
    </div>  
    <div class="col-lg-8 col-12 mb-4 mt-5">
      <h4 class="font-weight-bold text-left mb-4">GUESTS SERVICES OF SUN TRAVEL</h4>
      <p class="text-left">Reservation and ticketing by phone, email from 8:00 to 18:30 on weekdays (including Holidays  and New Year).
      Free ticket delivery in the city.
      Free advice on the best flight routes with the most suitable price.
      Advice on participation and benefit from frequent flyer programs of airlines such as: Golden Lotus Plus, Asia  Miles, Royal Orchid Plus ...
      Support changing date, time of flight, refund tickets quickly and conveniently.</p>
    </div>  
    <div class="col-lg-8 col-12 mb-4 mt-5">
      <h4 class="font-weight-bold text-left mb-4">GUESTS SERVICES OF SUN TRAVEL</h4>
      <p class="text-left">Reservation and ticketing by phone, email from 8:00 to 18:30 on weekdays (including Holidays  and New Year).
      Free ticket delivery in the city.
      Free advice on the best flight routes with the most suitable price.
      Advice on participation and benefit from frequent flyer programs of airlines such as: Golden Lotus Plus, Asia  Miles, Royal Orchid Plus ...
      Support changing date, time of flight, refund tickets quickly and conveniently.</p>
    </div>
	</div><!--end row-->
  </div>
  
    
    <Hotel/>
    <footer>sdsdfs</footer>
      
</div>
</template>
 
<script>
import Navbar from '../components/Navbar.vue';
import destination from '../json/destination.json';
import Hotel from '@/components/Hotel.vue';
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Footer from './Footer.vue';
 
  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel,
                     Hotel,
                     Navbar
        
    },
    
    data() {
      return {
        settings: {
            "dots": true,
  "dotsClass": "slick-dots custom-dot-class",
  "edgeFriction": 0.35,
  "infinite": false,
  "speed": 500,
  "slidesToShow": 1,
  "slidesToScroll": 1
        },
      }
    },
  }
  
</script> 
<style lang="scss" scoped>
*{margin:0;padding: 0;}
h4{color:black}
.bg-y{background-color: #E0AD1E;}
.border{border: 2px solid black;padding: 10px;}
footer{height: 50px;background-color: #343a40;}
</style>