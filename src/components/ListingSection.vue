<template>
    <div class="px-4 md:px-12 lg:px-28 md:my-20 md:mt-10 my-10">
        <SectionHeadline :headline="title" />

        <div class="grid md:grid-cols-4 grid-cols-2 md:gap-x-8 md:gap-y-16 gap-x-2 gap-y-4">
            <ProductCard 
                v-for="(product,index) in products"
                :key="index"
                :info="product"
            />
        </div>
        <div class="my-10 flex justify-center">
            <button class="md:px-16 md:py-3 px-8 py-2 bg-red-900 text-white md:text-2xl text-xl">
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