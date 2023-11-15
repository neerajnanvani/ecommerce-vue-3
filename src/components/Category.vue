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