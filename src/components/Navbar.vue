<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark navFixed text-white">
     <div class="container">
        <a class="navbar-brand text-white mr-4" href="#">NKN</a>
        <button class="navbar-toggler d-lg-none bg-light text-white" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon text-white"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 text-white">
                <li class="nav-item active ml-4 mr-4">
                   <router-link to="/" style="text-decoration:none"><a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a></router-link>
                </li>
                <li class="nav-item ml-4">
                   <router-link to="/pg2" style="text-decoration:none"><a class="nav-link text-white" href="#">Hotels</a></router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-white" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Promotions</a>
                    <div class="dropdown-menu" aria-labelledby="dropdownId">
                        <a class="dropdown-item" href="#">Action 1</a>
                        <a class="dropdown-item" href="#">Action 2</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-white" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Destinations</a>
                    <div class="dropdown-menu" aria-labelledby="dropdownId">
                        <a class="dropdown-item" href="#">Action 1</a>
                        <a class="dropdown-item" href="#">Action 2</a>
                    </div>
                </li>
                <li class="nav-item ml-4">
                   <router-link to="/search" style="text-decoration:none"><a class="nav-link text-white" href="#">Search</a></router-link>
                </li>
                <li class="nav-item ml-4">
                    <a class="nav-link text-white" href="#">About us</a>
                </li>
            </ul>            
             <div class="d-block ml-auto">
              <ul>              
                <li class="nav-item ml-4">
                    <a class="nav-link text-white" href="#">Sign up</a>
                </li>
                <li class="nav-item ml-4 btn btn-outline-y btn-details">
                   
               <router-link to="/signup" style="text-decoration:none"> <a class="nav-link text-white" href="#">Sign in</a></router-link>
                </li>
              </ul>   
             </div>
        </div>
         
    </div>   
    </nav>
</template>
<script>
export default {
    name: 'navbar'
}
</script>
<style lang="scss" scoped>
.navFixed{position: sticky;top:0;width: 100%;z-index: 1000;}
.btn-outline-y {
    border: 2px solid #E0AD1E;
    &:hover{
    background-color: #E0AD1E  !important;}
    }
</style>