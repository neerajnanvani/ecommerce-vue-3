<template>
    <div class="px-28 my-10 mt-10">
        <SectionHeadline :headline="title" />

        <div class="grid grid-cols-4 gap-x-8 gap-y-16">
            <ProductCard 
                v-for="(product,index) in products"
                :key="index"
                :info="product"
            />
        </div>
        <div class="my-10 flex justify-center">
            <button class="px-16 py-3 bg-red-900 text-white text-2xl">
                VIEW ALL
            </button>
        </div>
    </div>
</template>
<script setup>
import ProductCard from './ProductCard.vue';
import SectionHeadline from './SectionHeadline.vue';

defineProps([
    "title",
    "products"
])
</script>