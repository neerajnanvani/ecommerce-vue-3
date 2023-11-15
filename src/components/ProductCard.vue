<template>
    <div>
        <img 
            :src="getImageUrl(info.img)" 
            alt="info.title" 
            class="w-[500px]"
            loading="lazy"
        />
        <p class="text-center text-lg">
            {{info.title}}
        </p>
        <div class="text-center">
            <span class="text-2xl font-bold">
                ₹ {{info.newPrice}}
            </span>
            <span class="text-red-700 strike ml-2">
                <s>
                    ₹ {{info.mainPrice}}
                </s>
            </span>
        </div>
        <div class="flex space-x-5 mt-3 justify-center">
            <div v-for="size in info.sizes"
                :key="size"
                class="border border-gray-200 py-2 w-12 text-center"
            >
                <span class="text-base font-semibold">
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