<template>
    <div class="px-4">
        <div class="my-10 grid grid-cols-6 md:grid-cols-3 gap-y-4">
            <Category v-for="category in firstCategories"
            :key="category.name"
            :categoryImg="category.img"
            :categoryTitle="category.name" />
        </div>
    </div>
</template>
<script setup>
import Category from './Category.vue';

import {firstCategories} from "../resources/index"

</script>