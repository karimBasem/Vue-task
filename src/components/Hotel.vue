<template>
    <div class="container mt-4 mb-4 margin-t">
      <div class="row">
          <div class="col-md-8 col-12 mb-4 pb-4">
            <h4 class="text-left text-uppercase font-weight-bold text-dark">similar hotels</h4>  
          </div>
          <div class="col-md-4 col-12">
            <h5 class="d-block ml-auto">View all</h5>  
          </div>
          <div class="col-md-4 col-12 mb-4" v-for="data in datas" :key="data.id">
              <div>
                <div class="col-12">
                 <img :src="data.img" alt="" width="100%" height="100%">   
                </div>
                <div class="col-12">
                 <h5 class="text-left mt-4">{{data.title}}</h5> 
                 <p class="text-left">{{data.text}}</p>  
                </div>
              </div>  
          </div>
      </div>  
    </div>
</template>
<script>
import hotelData from '../json/hotel.json';
export default {
    name: 'hotel',
    data: function(){
        return{
            datas :hotelData,
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
  h5{color: black;}

    
</style>