<template>
  <div>
   <Navbar/>   
   <div class="container mt-4">
     <h4 class="text-left mb-4">Search result</h4>
     <div class="row">
    <div class="col-lg-4 col-md-6 col-12 mb-2"  v-for="data in datas" :key="data.id" >
      <div>
       <img class="mb-4" :src="data.image" width="100%" height="50%">
       <p class="font-weight-bold text-left">{{data.title}}</p>
       <p class="text-left">{{data.text}}</p>
     </div>  
    </div>
   </div>
  </div>
   <Footer/>   
  </div>  
</template>
<script>
import Travel from '../json/travelBlog.json';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
export default {
    name:'saerch',
    data: function(){
        return{
      datas: Travel 
       }
    },
    components:{
        Navbar,
        Footer
    }
}
</script>