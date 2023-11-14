<template>
    <div class="flex py-5 items-center my-16">
        <div class="flex-grow border-t border-red-400"></div>
        <span class="flex-shrink mx-8 text-4xl font-bold">{{headline}}</span>
        <div class="flex-grow border-t border-red-400"></div>
    </div>
</template>
<script setup>
defineProps([
    'headline'
])
</script>