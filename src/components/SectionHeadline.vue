<template>
    <div class="flex py-5 items-center md:my-16 my-6">
        <div class="flex-grow border-t border-red-400"></div>
        <span class="flex-shrink md:mx-8 mx-4 md:text-4xl text-xl font-bold">{{headline}}</span>
        <div class="flex-grow border-t border-red-400"></div>
    </div>
</template>
<script setup>
defineProps([
    'headline'
])
</script>