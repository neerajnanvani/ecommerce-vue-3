<template>
    <div class="shadow-xl z-10 sticky top-0">
        <!-- Hiding the black header top on small devices -->
        <div class="bg-[#1F1F1F] text-white px-28 md:flex justify-between py-4 hidden">
            <p>
                Welcome to our store Hiscraves
            </p>
            <div class="flex" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0002 16.2961 21 16.42Z" fill="white"/>
                </svg> 
               <span class="pl-3">
                   Call us: 1234567890
               </span> 
            </div>
        </div>
        <div class="md:p-8 p-4 flex px-10 sm:px-14 md:px-20 justify-between md:justify-around bg-white ">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z" fill="#770015"/>
                </svg>
            </button>
            
            <div class="">
                Logo Here
            </div>
            
            <div class="md:flex text-gray-600 hidden">
                <component 
                    v-for="(icon, index) in navOptions" 
                    :key="index" 
                    :is="icon" 
                    class="w-8 h-8 mx-3" 
                />
            </div>
        </div>
    </div>
</template>
<script setup>
import { MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon, UserIcon } from '@heroicons/vue/24/outline';

const navOptions = [
    MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon, UserIcon
]
</script>