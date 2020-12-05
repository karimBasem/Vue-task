<template>
    <div class="container mt-4 mb-4">
     <div class="row">
          <div class="col-md-4 col-12">
            <h4 class="text-left text-uppercase font-weight-bold text-dark">Best promotions</h4>  
          </div>
          <div class="col-md-4 col-12">
         <nav>
          <ul class="d-flex ">
           <li><a class="active mr-4" href="#">Combo</a></li>
           <li><a href="#">Hotels</a></li>
          </ul>         
         </nav>
          </div>
          <div class="col-md-4 col-12">
            <h5>View all</h5>  
          </div>

          <div class="col-md-4 col-12" v-for="data in datas" :key="data.id">
           <img :src="data.img" width="100%" height="70%" class="mb-2">
           <h5 class="mb-4">{{data.title}}</h5>
           <div class="d-flex">   
	   	   <i class="fas fa-hotel mb-0 mr-2 pt-2 secondary"></i>        
           <p class="mb-0 mr-2 secondary">JW Mariot</p>    
           <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fafa-star"></i><i class="fas fa-star"></i>
           </div>   
          </div>
     </div>   
    </div>
</template>
<script>
import promotionsData from'../json/promotions';
export default {
    name: 'promotions',
    data: function(){
        return{
            datas: promotionsData
        }
    }
}
</script>
<style lang="scss">
ul{
  list-style: none;display: inline;
  li{display: inline-block;margin: 4px;
  a{text-decoration: none;color: black;}
  }}
  .fa-star{color:#E0AD1E; margin-right: 6px;}
  .secondary{color: #9199B6;}
  // .relative{position: relative;
  // }
  .active{padding-bottom: 4px;border-bottom: 2px solid #E0AD1E;font-weight:bold;}  
</style>