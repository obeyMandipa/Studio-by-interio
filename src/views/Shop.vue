
<template>
  <div>
    <header>
      <Nav2></Nav2>

    </header>

    <main>
      <div class="space-y-6 mt-[50px]">
        <div class="flex justify-center w-full py-2 gap-2  ">
          <a href="#item1" class="btn w-[200px] rounded-full border border-gray-500">Chair</a> 
          <a href="#item2" class="btn w-[200px] rounded-full border border-gray-500">Couche</a> 
          <a href="#item3" class="btn w-[200px] rounded-full border border-gray-500">Kitchen</a> 
          <a href="#item4" class="btn w-[200px] rounded-full border border-gray-500">Lounge</a> 
          <a href="#item5" class="btn w-[200px] rounded-full border border-gray-500">Aesthatic items</a> 

        </div>
        <div class="carousel w-full h-[70vh]">

          <div id="item1" class="carousel-item w-[1920px] flex flex-col p-4 ">
            <p class="text-[25px] ml-8 font-light">Chairs</p>
            <div class="flex space-x-20 ml-[45px]">
              <div class="h-[400px] w-[300px] bg-[#d5d8db]  rounded-[30px] space-y-4">
                <img class="h-[300px] w-[300px] rounded-t-[30px] " src="@/assets/images/chairs/chair.jpeg" alt="">

                <div class="flex flex-col pl-4  space-y-1">
                  <p class=" text-[20px]">Aestatic sitting area</p>
                  <p class="text-[20px] w-12 ">$106</p>
                </div>
              </div>  

              <div class="h-[400px] w-[300px] bg-[#d5d8db]  rounded-[30px] space-y-4">
                <img class="h-[300px] w-[300px] rounded-t-[30px] " src="@/assets/images/chairs/Modern Lounge Chairs _ Living Room Lounge Chairs.jpeg" alt="">

                <div class="flex flex-col pl-4  space-y-1">
                  <p class=" text-[20px]">Aestatic sitting area</p>
                  <p class="text-[20px] w-12 ">$106</p>
                </div>
              </div>
              
              <div class="h-[400px] w-[300px] bg-[#d5d8db]  rounded-[30px] space-y-4">
                <img class="h-[300px] w-[300px] rounded-t-[30px] " src="@/assets/images/chairs/Meet the New Cloud Rug + More Cloud-Inspired Decor.jpeg" alt="">

                <div class="flex flex-col pl-4  space-y-1">
                  <p class=" text-[20px]">Aestatic sitting area</p>
                  <p class="text-[20px] w-12 ">$106</p>
                </div>
              </div>  

              <div class="h-[400px] w-[300px] bg-[#d5d8db]  rounded-[30px] space-y-4">
                <img class="h-[300px] w-[300px] rounded-t-[30px] " src="@/assets/images/chairs/Sophie Lounge Chair, Poly, Performance Velvet, Midnight, Natural Oak.jpeg" alt="">

                <div class="flex flex-col pl-4  space-y-1">
                  <p class=" text-[20px]">Aestatic sitting area</p>
                  <p class="text-[20px] w-12 ">$106</p>
                </div>
              </div> 
              
              <div class="h-[400px] w-[300px] bg-[#d5d8db]  rounded-[30px] space-y-4">
                <img class="h-[300px] w-[300px] rounded-t-[30px] " src="@/assets/images/chairs/Stunning laundry room design what’s your thought.jpeg" alt="">

                <div class="flex flex-col pl-4  space-y-1">
                  <p class=" text-[20px]">Aestatic sitting area</p>
                  <p class="text-[20px] w-12 ">$106</p>
                </div>
              </div> 

            </div>
            
          </div> 

          <div id="item2" class="carousel-item w-full flex flex-col p-4 ">
            <p class="text-[25px] ml-8 font-light">Couche</p>

            <div class="h-[400px] w-[300px] bg-[#d5d8db]  rounded-[30px] space-y-4">
              <img class="h-[300px] w-[300px] rounded-t-[30px] " src="@/assets/images/Comfy home aesthetic.jpeg" alt="">

              <div class="flex flex-col pl-4   space-y-1">
                <p class=" text-[20px]">Aestatic sitting area</p>
                <p class="text-[20px]">$106</p>
              </div>
            </div> 
          </div> 

          <div id="item3" class="carousel-item w-full flex flex-col p-4">
            <p class="text-[25px] ml-8 font-light">Kitchen</p>

            <div class="h-[400px] w-[300px] bg-[#d5d8db]  rounded-[30px] space-y-4">
              <img class="h-[300px] w-[300px] rounded-t-[30px] " src="@/assets/images/Comfy home aesthetic.jpeg" alt="">

              <div class="flex flex-col pl-4   space-y-1">
                <p class=" text-[20px]">Aestatic sitting area</p>
                <p class="text-[20px]">$106</p>
              </div>
            </div> 
          </div> 

          <div id="item4" class="carousel-item w-full flex flex-col p-4">
            <p class="text-[25px] ml-8 font-light">Lounge</p>

            <div class="h-[400px] w-[300px] bg-[#d5d8db]  rounded-[30px] space-y-4">
              <img class="h-[300px] w-[300px] rounded-t-[30px] " src="@/assets/images/sitting.jpeg" alt="">

              <div class="flex flex-col pl-4   space-y-1">
                <p class=" text-[20px]">Aestatic sitting area</p>
                <p class="text-[20px]">$106</p>
              </div>
            </div> 
          </div>

          <div id="item5" class="carousel-item w-full flex flex-col p-4">
            <p class="text-[25px] ml-8 font-light">Aesthatic items</p>

            <div class="h-[400px] w-[300px] bg-[#d5d8db]  rounded-[30px] space-y-4">
              <img class="h-[300px] w-[300px] rounded-t-[30px] " src="@/assets/images/sitting.jpeg" alt="">

              <div class="flex flex-col pl-4   space-y-1">
                <p class=" text-[20px]">Aestatic sitting area</p>
                <p class="text-[20px]">$106</p>
              </div>
            </div> 
          </div>
        </div> 
      </div>
    </main>
    <footer>

    </footer>
  </div>
</template>

<script>

import Nav2 from '@/components/Nav2.vue';

export default {
  name: 'Blog',
  created() {

  },
  data() {
    return {
    }
  },

  components:{
    Nav2
  },
  props: {
   
  },
  methods: {
   
  },
}
</script>

<style scoped>

</style>

