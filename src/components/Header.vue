<template>
    <div class="p-6 flex px-20 justify-around sticky top-0 bg-white shadow-xl z-10">
        <button>
            <Bars4Icon class="w-8 h-8 " />
        </button>

        <div class="">
            Logo Here
        </div>

        <div class="flex text-gray-600">
            <MagnifyingGlassIcon class="w-6 h-6 mx-2" />
            <HeartIcon class="w-6 h-6 mx-2" />
            <ShoppingCartIcon class="w-6 h-6 mx-2" />
            <UserIcon class="w-6 h-6 mx-2" />
        </div>
    </div>
</template>
<script setup>
import { Bars4Icon, MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon, UserIcon } from '@heroicons/vue/24/outline'
</script>