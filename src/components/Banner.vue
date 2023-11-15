<template>
    <img :src="getImageUrl(image)" class="w-full lg:py-20 md:py-10 py-5" />
</template>
<script setup>

import { getImageUrl } from '../helpers/link';
defineProps([
    'image'
]);

</script>