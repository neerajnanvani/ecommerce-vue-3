<template>
    <div>
        <img :src="getImageUrl(info.img)" alt="">
        <p class="text-center text-lg font-semibold">
            {{info.title}}
        </p>
        <div class="text-center">
            <span class="text-2xl font-bold">
                ₹ {{info.newPrice}}
            </span>
            <span class="text-red-700 strike">
                <s>
                    ₹ {{info.mainPrice}}
                </s>
            </span>
        </div>
        <div class="flex space-x-5 mt-3 justify-center">
            <div v-for="size in info.sizes"
                :key="size"
                class="border border-gray-400 py-3 w-12 text-center"
            >
                <span class="text-xl font-semibold">
                    {{size}}
                </span>
            </div>

        </div>
    </div>
</template>
<script setup>
defineProps([
    "info"
])

const getImageUrl  = (imgLink) => {
    return new URL(`../assets/${imgLink}.webp`, import.meta.url)
} 
</script>