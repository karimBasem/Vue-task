<template>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-12 mt mb-6">
           <h5>NKN</h5>   
            <ul class="list-unstyled">
                <li><i class="fas fa-map-marker-alt mr-2 c-y"></i>302 Wilburn Mountain Apt. 518</li>
                <li><i class="fas fa-phone mr-2 c-y"></i>685-290-5343</li>
                <li><i class="fas fa-envelope mr-2 c-y"></i> angel_olson@gmail.com</li>
            </ul>
          </div>
          <div class="col-md-3 col-12  mt">
           <h5 class="text-uppercase"> our services</h5> 
           <ul>            
           <li class="pl-2">Home</li>
           <li class="pl-2">Combo</li>
           <li class="pl-2">Vouchers</li>  
           <li class="pl-2">promotions</li>
           <li class="pl-2">Destinations</li> 
           </ul> 
          </div>
          <div class="col-md-3 col-12  mt">
           <h5 class="text-uppercase"> support</h5> 
           <ul>            
           <li class="pl-2">Contact Us</li>
           <li class="pl-2">About Us</li>
           <li class="pl-2">Blog</li>  
           <li class="pl-2">Partner</li>
           <li class="pl-2">Sign in / Sign up</li> 
           </ul> 
          </div>
          <div class="col-md-3 col-12 mb-4 mt">
           <form>
            <div class="d-flex"> 
             <input class="form-control" type="email" placeholder="enter your mail"> 
             <button class="bg">sent</button>  
            </div>               
           </form> 
           <h6 class="text-left mt-2">follow us</h6>
           <div class="icon">
             <a href="" class="ml-2"><i class="fab fa-twitter"></i></a>
             <a href="" class="ml-2"><i class="fab fa-youtube"></i></a>
             <a href="" class="ml-2"><i class="fab fa-facebook"></i></a>
             <a href="" class="ml-2"><i class="fab fa-instagram"></i></a> 
           </div>
          </div>  
        
        </div>  
      
      </div>  

    </footer>
</template>
<script>
export default {
    name:'footer',
}
</script>
<style lang="scss" scoped>
footer{background-color: #30353d;color: white;padding-bottom: 29px;
.mt{margin-top: 2.5rem;}
h5{color: white;text-align: left;}
ul{
    li{text-align: left;color: white;display: block;}
}
.bg{background-color: #E0AD1E;}
.icon{text-align: left;
  a{
      // i{color: black;font-size: 22px;}
      i{font-size:28px;color: white;opacity: 0.5;
      &:hover{opacity: 0.5;color: #E0AD1E;}
      }
  }
}
.c-y{color: #E0AD1E;}
}
</style>