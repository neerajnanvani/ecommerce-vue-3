<template>
    <div class="max-w-full flex justify-center items-center flex-col">
        <img 
            :src=getImageUrl(categoryImg)
            :alt="categoryTitle"
            class="w-24 md:w-32 md:h-32 h-24 rounded-full my-4"
        />
        <p class="text-center md:text-xl text-base font-bold">
           {{categoryTitle}}
        </p>
    </div>
</template>
<script setup>
import { getImageUrl } from '../helpers/link';

defineProps([
    'categoryImg', 'categoryTitle'
]);
</script>
<style scoped>
p {
    font-family: Playfair Display;
}
</style>