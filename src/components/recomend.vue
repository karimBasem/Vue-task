<template>
    <div class="container mt-4 mb-4 margin-t">
      <div class="row">
          <div class="col-md-4 col-12 mb-4 pb-4">
            <h4 class="text-left text-uppercase font-weight-bold text-dark">Recomends for you</h4>  
          </div>
          <div class="col-md-4 col-12">
         <nav>
          <ul class="d-flex justify-content-between ">
           <li><a class="active" href="#">Hotels/Resotrs</a></li>
           <li><a href="#">Combo</a></li>
           <li><a href="#">Voucher</a></li>
          </ul>         
         </nav>
          </div>
          <div class="col-md-4 col-12">
            <h5>View all</h5>  
          </div>
          <div class="col-md-6 col-12 mb-4" v-for="data in datas" :key="data.id">
              <div class="row">
                <div class="col-md-6 col-12">
                 <img :src="data.img" alt="" width="100%" height="100%">   
                </div>
                <div class="col-md-6 col-12">
                 <h5 class="text-left mt-4">{{data.title}}</h5>   
                 <div class="rate text-left">
                 <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                 <h5 class="text-left secondary">Hotel service</h5>
            <div class="text-left mb-4">     
	   	   <i class="fas fa-hotel mb-0 mr-2 pt-2 secondary"></i>  
	   	   <i class="fas fa-hotel mb-0 mr-2 pt-2 secondary"></i>  
	   	   <i class="fas fa-hotel mb-0 mr-2 pt-2 secondary"></i>  
	   	   <i class="fas fa-hotel mb-0 mr-2 pt-2 secondary"></i> </div> 
                 <button class="btn btn-outline-warning btn-details text-left d-block mr-auto">Details</button>
                </div>
              </div>  
          </div>
      </div>  
    </div>
</template>
<script>
import recomendData from '../json/recomend.json';
export default {
    name: 'recomend',
    data: function(){
        return{
            datas :recomendData,
        }
    }
}
</script>
<style lang="scss" scoped>
ul{
  list-style: none;display: inline;
  li{display: inline-block;margin: 4px;
  a{text-decoration: none;color: black;}
  }}
  .btn-details{padding: 6px 22px;border-color:#E0AD1E ;
   &:hover{background-color: #E0AD1E;}
  }
  .margin-t{margin-top:7%  !important}

    
</style>