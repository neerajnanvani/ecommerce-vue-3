<template>
    <div class="px-28 grid grid-cols-3 gap-8 my-10">
        <div 
            v-for="(category, index) in secondCategories"
            :key="index"
            class="relative "
        >
            <img :src="getImageUrl(category.img)" alt="" class="w-full">
            <div class="backdrop-blur-xl bg-white/30 w-full h-20 absolute text-3xl bottom-0">
                <p class="flex justify-center items-center h-full text-white">
                    {{category.name}}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { secondCategories } from "../resources";
import { getImageUrl } from '../helpers/link';

</script>