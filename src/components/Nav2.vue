
<template>
  <div>
<div class="navbar bg-base-100 ml-[-15px] shadow-xl  h-[70px] w-[98.5vw] mt-[-15px]  ">
    <!-- this is basically the logo -->
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">Studio by interio</a>
    </div>
  <div class="flex justify-between w-[500px] ">

    <router-link to="/shop" class="hover:border-b-4 hover:border-gray-500 w-12 text-center"> Shop</router-link>
    <router-link to="/blog" class="hover:border-b-4 hover:border-gray-500 w-12 text-center"> Blog</router-link>
    <router-link to="/about" class="hover:border-b-4 hover:border-gray-500 w-18 text-center"> About us</router-link>
    <!-- cart link -->
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div class="card-body">
          <span class="font-bold text-lg">8 Items</span>
          <span class="text-info">Subtotal: $999</span>
          <div class="card-actions">
            <router-link to="/cart">
              <button class="btn btn-primary btn-block">View cart</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- profile link -->
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'Nav2',
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

<style  scoped>

</style>

