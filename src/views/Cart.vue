
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
              <div class="w-[150px] h-[150px] bg-gray-400 rounded-lg"><img class="h-[150px] w-[150px] rounded-lg " src="@/assets/images/chairs/chair.jpeg" alt=""></div>
              <div class="">
                <p class="text-[18px]">Name</p>
                <p class="font-light" >Reference Number</p>
              </div>
              <div class="flex space-x-4 w-[200px] justify-center h-[50px] border rounded-full p-2">
                <button class=" h-[27px] w-[27px] text-[24px] font-bold" @click="reduceUnit">-</button>
                <input v-model="unit" type="text" class=" h-[27px] w-[35px] p-2 text-center" placeholder="1" readonly>
                <button class=" h-[27px] w-[27px] text-[22px] font-bold" @click="addUnit">+</button>
              </div>
              <p class="text-[18px]">$Amount</p>
              <button class="w-[150px] h-[50px] border rounded-full tex">
                Buy
              </button>
              <button class="btn w-[70px] h-[150px] rounded-lg">X</button>
            </div>

            <!-- cart item -->
            <div class="pt-4 pb-4 border-b  h-[180px] flex items-center justify-between">
              <div class="w-[150px] h-[150px] bg-gray-400 rounded-lg"><img class="h-[150px] w-[150px] rounded-lg " src="@/assets/images/sitting.jpeg" alt=""></div>
              <div class="">
                <p class="text-[18px]">Name</p>
                <p class="font-light" >Reference Number</p>
              </div>
              <div class="flex space-x-4 w-[200px] justify-center h-[50px] border rounded-full p-2">
                <button class=" h-[27px] w-[27px] text-[24px] font-bold" @click="reduceUnit">-</button>
                <input v-model="unit" type="text" class=" h-[27px] w-[35px] p-2 text-center" placeholder="1" readonly>
                <button class=" h-[27px] w-[27px] text-[22px] font-bold" @click="addUnit">+</button>
              </div>
              <p class="text-[18px]">$Amount</p>
              <button class="w-[150px] h-[50px] border rounded-full tex">
                Buy
              </button>
              <button class="btn w-[70px] h-[150px]  rounded-lg">X</button>
            </div>

            <!-- cart item -->
            <div class="pt-4 pb-4 border-b  h-[180px] flex items-center justify-between">
              <div class="w-[150px] h-[150px] bg-gray-400 rounded-lg"><img class="h-[150px] w-[150px] rounded-lg " src="@/assets/images/chairs/Stunning laundry room design what’s your thought.jpeg" alt=""></div>
              <div class="">
                <p class="text-[18px]">Name</p>
                <p class="font-light" >Reference Number</p>
              </div>
              <div class="flex space-x-4 w-[200px] justify-center h-[50px] border rounded-full p-2">
                <button class=" h-[27px] w-[27px] text-[24px] font-bold" @click="reduceUnit">-</button>
                <input v-model="unit" type="text" class=" h-[27px] w-[35px] p-2 text-center" placeholder="1" readonly>
                <button class=" h-[27px] w-[27px] text-[22px] font-bold" @click="addUnit">+</button>
              </div>
              <p class="text-[18px]">$Amount</p>
              <button class="w-[150px] h-[50px] border rounded-full tex">
                Buy
              </button>
              <button class="btn w-[70px] h-[150px]  rounded-lg">X</button>
            </div>

          </div>
        </div>
        <div class="h-[80vh] w-[30%] bg-gray-300 rounded-[15px] p-6">
          <p class="text-[25px] font-light border-b">Payment information...</p>

          <div class="mt-[40px] space-y-6" >
            <label for="" class="text-[18px]">Payment method:</label>
            <div class="flex justify-between ">
              <button class="btn w-[250px] h-[65px] rounded-full border  border-gray-500">Credit card</button>
              <div class="btn w-[250px] h-[65px] rounded-full border  border-gray-500">Pay now</div>
            </div>
          </div>

          <div class="flex flex-col mt-[40px] space-y-4">
            <label for="" class="text-[18px]">Name on card: </label>
            <input type="text" class="h-[50px] w-full p-2 border-b border-gray-400 bg-transparent" placeholder="Rufaro mandipa">
          </div>

          <div class="flex flex-col mt-[40px] space-y-4">
            <label for="" class="text-[18px]">Card number: </label>
            <input type="number" class="h-[50px] w-full p-2 border-b  text-[24px] border-gray-400 bg-transparent" placeholder="xxxx - xxxx - xxxx - xxxx">
          </div>

          <div class="flex justify-between mt-[40px]">
            <div class="flex flex-col space-y-4">
              <label for="" class="text-[18px]">Expiery date: </label>
              <input type="date" class="h-[50px]  p-2 border-b border-gray-400 bg-transparent" placeholder="Rufaro mandipa">
            </div>
            <div class="flex flex-col space-y-4">
              <label for="" class="text-[18px]">CVV: </label>
            <input type="text" class="h-[50px] p-2 border-b border-gray-400 bg-transparent " placeholder="X X X">
            </div>
          </div>

          <button class="btn w-full h-[65px] text-[24px] rounded-full border  border-gray-500 mt-[40px]" >Check out</button>
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
  name: 'Cart',
  created() {

  },
  data() {
    return {
      unit: 1,
    }
  },

  components:{
    Nav2
  },
  props: {
   
  },
  methods: {

    addUnit(){
      this.unit++
    },

    reduceUnit(){
      this.unit--
    }
   
  },
}
</script>

<style lang="scss" scoped>

</style>

