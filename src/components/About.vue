<template>
      <section class="page-section" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">About</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      
      <div class="row">
        <div class="col-lg-12">
          <ul class="timeline" v-for=" (data,key) in json" :key="key">


            <li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" :src="data.img" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>{{data.date}}</h4>
                  <h4 class="subheading">{{data.text}}</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">{{data.description}}</p>
                </div>
              </div>
            </li>


            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" :src="data.img" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>{{data.date}}</h4>
                  <h4 class="subheading">An Agency is Born</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>


            
            <li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/about/3.jpg" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>December 2012</h4>
                  <h4 class="subheading">Transition to Full Service</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/about/4.jpg" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>July 2014</h4>
                  <h4 class="subheading">Phase Two Expansion</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <h4>Be Part
                  <br>Of Our
                  <br>Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'About',

  data: () => ({
   
     json:[
       {text:"Our Humble Beginnings",
       title:" Title",
       date:"March 2011",
       description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
       img:require("../assets/img/about/1.jpg" )},
        {text:"Our Humble Beginnings",
       title:" Title",
       date:"March 2011",
       description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
       img:require("../assets/img/about/2.jpg" )}
       ]
   })
    
}


</script>

<style scoped>

</style>