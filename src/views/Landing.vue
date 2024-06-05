
<template>
  <header>
    <div>
   <div class="flex justify-between shadow-xl h-[70px]  items-center p-2">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">Studio by interio</a>
    </div>
    <ul class="flex justify-between w-[150px] " >
      <li><a href="">Blog</a></li>
      <li><a href="">About Us</a></li>
    </ul>
   </div>
  </div>
  </header>

  <main class="space-y-4">
    <section class=" border-b border-gray-300 h-[100vh]">
      <div class=" flex justify-around " >
        <div class="h-[600px] w-[550px]  mt-[200px] space-y-6">
          <p class="text-[70px] font-bold">Studio morden interio design</p>
          <p class="text-[20px]">Overarching five-year effort to cut costs, so far with uneven success. Akers's place in history
              rides on making his ambitious program work. The old centralist mentality still exerts a
              powerful pull, as anybody who spends </p>
          <div class="">
            <router-link to="/shop">
              <button class="btn h-[50px] w-[150px] hover:bg-black hover:text-white border border-gray-400 font-bold rounded-full">Explore</button>
            </router-link>
          </div>
        </div>
        <div class="flex w-[800px  mt-[60px] space-x-4 ">
          <img class=" rounded-[200px] h-[400px] -rotate-[30deg] mt-[290px]" src="@/assets/images/landing.jpeg" alt="">
          <img class=" rounded-[200px] h-[700px] -rotate-[30deg]" src="@/assets/images/landing2.jpeg" alt="">
          <img class=" rounded-[200px] h-[400px] -rotate-[30deg]" src="@/assets/images/landing3.jpeg" alt="">


        </div>
      </div>
    </section>
    <section class="p-[60px] h-[100vh]">
      <div class="flex justify-between mt-[200px]">
        <div class="h-[550px] w-[400px]  border-black rounded-[50px] p-[40px] space-y-4">
          <p class="text-[30px] font-bold ">Emmaculatly Crafted with excellence to give you your desired comfort</p>
          <p class="">
            Overarching five-year effort to cut costs, so far with uneven success. Akers's place in history
              rides on making his ambitious program work. The old centralist mentality still exerts a
              powerful pull, as anybody who spends
          </p>
          <button class="h-[50px] w-[150px] hover:bg-black hover:text-white border border-gray-400 font-bold rounded-full">Explore</button>

        </div>
        <div class="h-[550px] w-[400px] bg-[#d5d8db]  rounded-[50px] space-y-4"> 
          <img class="h-[400px] w-[400px]  rounded-t-[50px] " src="@/assets/images/chairs/chair.jpeg" alt="">

          <div class="flex flex-col items-center space-y-2">
            <p class=" text-[20px]">Randel chair</p>
            <p class="text-[20px]">$300</p>
          </div>

        </div>
        <div class="h-[550px] w-[400px] bg-[#d5d8db]  rounded-[50px] space-y-4">
          <img class="h-[400px] w-[400px] rounded-t-[50px] " src="@/assets/images/Comfy home aesthetic.jpeg" alt="">

          <div class="flex flex-col items-center space-y-2">
            <p class=" text-[20px]">Comfy home aesthetic</p>
            <p class="text-[20px]">$600</p>
          </div>

        </div>
        <div class="h-[550px] w-[400px] bg-[#d5d8db]  rounded-[50px] space-y-4">
          <img class="h-[400px] w-[400px] rounded-t-[50px] " src="@/assets/images/sitting.jpeg" alt="">

          <div class="flex flex-col items-center space-y-2">
            <p class=" text-[20px]">Aestatic sitting area</p>
            <p class="text-[20px]">$106</p>
          </div>
        </div>


      </div>
    </section>
  </main>

  <footer class="footer footer-center p-10 bg-black text-white text-[25px] rounded h-[500px]">
  <nav class="grid grid-flow-col gap-4">
    <a class="link link-hover">About us</a>
    <a class="link link-hover">Store</a>
    <a class="link link-hover">Blog</a>
    <a class="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <div class="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
</template>

<script>


export default {
  name: 'Landing ',
  created() {

  },
  data() {
    return {
    }
  },


  props: {
   
  },
  methods: {
   
  },
}
</script>

<style scoped>

</style>

