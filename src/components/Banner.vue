<template>
    <img :src="getImageUrl(image)" class="w-full py-20" />
</template>
<script setup>

import { getImageUrl } from '../helpers/link';
defineProps([
    'image'
]);

</script>