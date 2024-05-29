
<template>
  <div>
    <header>
      <Nav2></Nav2>

    </header>

    <main>
      <div class=" h-[80vh] mt-[70px] flex">
        <div class="h-[80vh] w-[70%]  p-6 space-y-6">
          <p class="text-[25px] font-light">Your shopping cart</p>
          <div class=" h-[71vh] w-[96%] ml-[30px] space-y-4">
            <!-- cart item -->
            <div class="pt-4 pb-4 border-b  h-[180px] flex items-center justify-between">
              <div class="w-[150px] h-[150px] bg-gray-400 rounded-lg"></div>
              <div class="">
                <p>Name</p>
                <p>Reference Number</p>
              </div>
              <div class="w-[200px] h-[50px] border rounded-full">
              </div>
              <p class="text-[18px]">$Amount</p>
              <button class="w-[150px] h-[50px] border rounded-full tex">
                Buy
              </button>
              <button class="w-[70px] h-[150px] bg-red-300 rounded-lg">X</button>
            </div>

            <!-- cart item -->
            <div class="pt-4 pb-4 border-b  h-[180px] flex items-center justify-between">
              <div class="w-[150px] h-[150px] bg-gray-400 rounded-lg"></div>
              <div class="">
                <p>Name</p>
                <p>Reference Number</p>
              </div>
              <div class="w-[200px] h-[50px] border rounded-full">
              </div>
              <p class="text-[18px]">$Amount</p>
              <button class="w-[150px] h-[50px] border rounded-full tex">
                Buy
              </button>
              <button class="w-[70px] h-[150px] bg-red-300 rounded-lg">X</button>
            </div>

            <!-- cart item -->
            <div class="pt-4 pb-4 border-b  h-[180px] flex items-center justify-between">
              <div class="w-[150px] h-[150px] bg-gray-400 rounded-lg"></div>
              <div class="">
                <p>Name</p>
                <p>Reference Number</p>
              </div>
              <div class="w-[200px] h-[50px] border rounded-full">
              </div>
              <p class="text-[18px]">$Amount</p>
              <button class="w-[150px] h-[50px] border rounded-full tex">
                Buy
              </button>
              <button class="w-[70px] h-[150px] bg-red-300 rounded-lg">X</button>
            </div>

          </div>
        </div>
        <cdiv class="h-[80vh] w-[30%] bg-green-200 rounded-[15px] p-6">
          <p class="text-[25px] font-light">Card details</p>
        </cdiv>

      </div> 
    </main>
    <footer>

    </footer>
  </div>
</template>

<script>
import Nav2 from '@/components/Nav2.vue';

export default {
  name: 'Cart',
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

<style lang="scss" scoped>

</style>

