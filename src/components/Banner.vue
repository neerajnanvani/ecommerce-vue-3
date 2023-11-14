<template>
    <img :src="getImageUrl(image)" class="w-full py-20" />
</template>
<script setup>
defineProps([
    'image'
]);

const getImageUrl  = (imgLink) => {
    return new URL(`../assets/${imgLink}`, import.meta.url)
} 
</script>