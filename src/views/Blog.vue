
<template>
  <div>
    <header>
      <Nav2></Nav2>

    </header>

    <main>
      <div class="space-y-2 mt-[50px]">
        <div class="flex justify-center w-[230px] ml-auto py-2 gap-2  ">
            <a href="#item1" class="btn w-[100px] rounded-full border  border-gray-500">Posts</a> 
            <a href="#item2" class="btn w-[100px] rounded-full border border-gray-500">Create</a> 
          
        </div>
        
        <div class="carousel w-full h-[75vh]">

          <!-- Posts -->
 
          <div id="item1" class="carousel-item w-[1920px] bg-red-400 flex flex-col p-4 ">
            <p class="text-[25px] ml-8 font-light">Posts</p>
            <div class="flex space-x-20 ml-[45px]">
              

            </div>
            
          </div> 

          <!-- Create -->

          <div id="item2" class="carousel-item w-[1920px] flex flex-col p-4 ">
            <p class="text-[25px] ml-8 font-light">Create post...</p>
            <div class="flex  h-[70vh] w-[1900px]  p-4 space-x-12">
              <div class="flex flex-col space-y-8">
                <img :src="imageUrl" alt="upload image" class="h-[55vh] w-[600px] border rounded-xl">
                <!-- <span v-else>image will be displayed here</span> -->
                <div class="space-x-4">
                  <input type="file" name="imageUpload" id="imageUpload" @change="handleImageUpload" class="file-input file-input-bordered w-full max-w-xs rounded-2xl">
                  <button class="btn w-[200px] rounded-full border  border-gray-500">Post</button>
                </div>
              </div> 
              <textarea name="" id="" class="resize-none w-[1200px] h-auto text-[20px] p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-300" placeholder="Type your blog post... "></textarea>
              <div class="w-[80px] h-[80px]  rounded-full border border-black"></div>
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
      imageUrl: "",
    }
  },

  components:{
    Nav2
  },
  props: {
   
  },
  methods: {

    handleImageUpload(event){
      const file = event.target.files[0];

      if(file){
        const reader = new FileReader();

        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };

        reader.readAsDataURL(file);
      }
      else{
        this.imageUrl = null
      }
    }
   
  },
}
</script>

<style lang="scss" scoped>

</style>

