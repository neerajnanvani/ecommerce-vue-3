<template>
    <div class="px-4 md:px-12 lg:px-28 md:py-10 py-5">
        <div class="my-10 grid grid-cols-3 lg:grid-cols-6 md:gap-y-4 gap-y-2">
            <Category v-for="category in firstCategories"
            :key="category.name"
            :categoryImg="category.img"
            :categoryTitle="category.name" />
        </div>
    </div>
</template>
<script setup>
import Category from './Category.vue';

import {firstCategories} from "../resources"

</script>