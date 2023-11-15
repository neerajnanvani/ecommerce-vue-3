<template>
    <div class="max-w-full flex justify-center items-center flex-col">
        <img 
            :src=getImageUrl(categoryImg)
            :alt="categoryTitle"
            class="w-56 h-56 rounded-full my-4"
        />
        <p class="text-center text-xl font-bold">
           {{categoryTitle}}
        </p>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps([
    'categoryImg', 'categoryTitle'
]);

const getImageUrl  = (imgLink) => {
    return new URL(`../assets/${imgLink}`, import.meta.url)
} 
</script>
<style scoped>
p {
    font-family: Playfair Display;
}
</style>