<template>
    <div class="px-4 md:px-12 lg:px-28 grid md:grid-cols-3 grid-cols-2 md:gap-8 gap-2 my-10">
        <div 
            v-for="(category, index) in secondCategories"
            :key="index"
            :class="`relative w-full lg:h-[550px] md:h-[400px] h-[300px]  ${colors[index]} object-contain overflow-hidden`"
        >
            <img :src="getImageUrl(category.img)" :alt="category.name" class="w-full h-full">
            <div class="backdrop-blur-xl bg-white/30 w-full md:h-16 lg:h-20 h-12 absolute lg:text-3xl md:text-xl text-base bottom-0">
                <p class="flex text-xl justify-center items-center h-full text-white capitalize">
                    {{category.name}}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { secondCategories } from "../resources";
import { getImageUrl } from '../helpers/link';

const colors = ["bg-green-500", "bg-blue-300", "bg-red-500", "bg-purple-200", "bg-amber-500", "bg-blue-500"];

</script>
<style scoped>
p {
    font-family: Playfair Display;
}
</style>