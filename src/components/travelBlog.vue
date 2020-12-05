<template>
    <div class="container">
     <div class="row">
          <div class="col-md-4 col-12">
            <h4 class="text-left text-uppercase font-weight-bold text-dark">Travel Blog</h4>  
          </div>
          <div class="col-md-4 col-12">
         <nav>
          <ul class="d-flex ">
           <li><a class="active mr-4" href="#">Reviews</a></li>
           <li><a href="#">Destinations</a></li>
           <li><a href="#">HandBook</a></li>
          </ul>         
         </nav>
          </div>
          <div class="col-md-4 col-12">
            <h5>View all</h5>  
          </div>
        <div class="d-flex align-item-center col-lg-3 col-md-6 col-12"  v-for="data in datas" :key="data.id" >
          <div>
           <img class="mb-4" :src="data.image" width="100%" height="70%">
           <p class="font-weight-bold">{{data.title}}</p>
           <p>{{data.text}}</p>
         </div>  
        </div>
     </div>   
    </div>
</template>
<script>
import travel from "../json/travelBlog.json";
export default {
    data: function(){
        return{
        datas: travel,
        }
    },
    
    name: 'travelBlog',
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
  </style>