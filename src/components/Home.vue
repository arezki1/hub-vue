<template>
   <section class="bg-light page-section" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Portfolio</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div class="row">
      
       
        <div class="col-md-4 col-sm-6 portfolio-item" v-for=" (data,key) in json" :key="key">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" :src="data.img"  alt="">
          </a>
          <div class="portfolio-caption">
            <h4>{{data.title}}</h4>
            <p class="text-muted">{{data.text}}</p>
          </div>
        </div>
       
       
      </div>
    </div>
  </section>

</template>

<script>
export default {

  name:'Home',

data:  () => ({
   
     json:[
       {text:"hello",
       title:" Title",
       img:require("../assets/img/portfolio/04-thumbnail.jpg" )},
       {text:"hello2",
       title:" Title2",
       img: require("../assets/img/portfolio/05-thumbnail.jpg" )}
       ]
   })
    

}
</script>