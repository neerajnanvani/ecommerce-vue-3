<template>
    <div>
        <div class="relative group">
            <img
                v-if="imgLoaded"
                :src="getImageUrl(info.img)" 
                alt="info.title" 
                class="w-full lg:h-[500px] md:h-96 h-84 inset-0 object-cover"
                loading="lazy"
            />
            <div v-else
                class="w-full lg:h-[500px] md:h-80 h-72 border border-gray-200 bg-gray-400 px-6 py-20"
            > 
                <div v-for="time of 5" :key="time" class="h-1/5 bg-gray-200 m-2  rounded-xl animate-bounce" />

            </div>

            
            <div class="absolute w-full h-full text-3xl bottom-0">
                <div 
                    class="flex backdrop-blur-md transition-all transform 
                            translate-y-8 opacity-0 
                            group-hover:opacity-100 
                            group-hover:translate-y-0 justify-center items-center h-full text-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="194" height="55" viewBox="0 0 194 55" fill="none">
                        <circle cx="97" cy="27.2292" r="27" fill="white"/>
                        <path d="M105.243 19.9861C107.505 22.2541 107.583 25.8661 105.479 28.2221L96.999 36.7141L88.521 28.2221C86.417 25.8661 86.496 22.2481 88.757 19.9861C90.515 18.2291 93.093 17.7891 95.261 18.6691L91.343 22.5871L92.757 24.0021L97 19.7591L96.987 19.7451L97.001 19.7581C99.35 17.6491 102.98 17.7191 105.243 19.9861Z" fill="#770015"/>
                        <circle cx="167" cy="27.2292" r="27" fill="white"/>
                        <path d="M168.576 32.5001L163.466 29.7131C162.975 30.2 162.352 30.5308 161.674 30.6637C160.995 30.7967 160.293 30.7259 159.655 30.4602C159.017 30.1945 158.472 29.7459 158.088 29.1709C157.705 28.5959 157.5 27.9202 157.5 27.2291C157.5 26.538 157.705 25.8623 158.088 25.2873C158.472 24.7123 159.017 24.2637 159.655 23.998C160.293 23.7324 160.995 23.6615 161.674 23.7945C162.352 23.9274 162.975 24.2582 163.466 24.7451L168.576 21.9581C168.401 21.1358 168.527 20.278 168.933 19.5414C169.338 18.8048 169.995 18.2386 170.783 17.9465C171.571 17.6544 172.439 17.6559 173.226 17.9506C174.013 18.2453 174.668 18.8136 175.071 19.5516C175.474 20.2895 175.598 21.1478 175.42 21.9695C175.242 22.7911 174.774 23.5213 174.102 24.0264C173.43 24.5315 172.598 24.7778 171.76 24.7203C170.921 24.6628 170.131 24.3053 169.534 23.7131L164.424 26.5001C164.526 26.9808 164.526 27.4775 164.424 27.9581L169.534 30.7451C170.131 30.153 170.921 29.7954 171.76 29.7379C172.598 29.6804 173.43 29.9267 174.102 30.4318C174.774 30.9369 175.242 31.6671 175.42 32.4888C175.598 33.3104 175.474 34.1687 175.071 34.9067C174.668 35.6446 174.013 36.2129 173.226 36.5076C172.439 36.8023 171.571 36.8038 170.783 36.5117C169.995 36.2196 169.338 35.6535 168.933 34.9169C168.527 34.1803 168.401 33.3224 168.576 32.5001Z" fill="#770015"/>
                        <circle cx="27" cy="27.2292" r="27" fill="white"/>
                        <path d="M19 21.6433L15.757 18.4013L17.172 16.9863L20.414 20.2293H35.656C35.8119 20.2293 35.9656 20.2657 36.1049 20.3357C36.2442 20.4056 36.3652 20.5072 36.4583 20.6322C36.5513 20.7573 36.6139 20.9023 36.6409 21.0558C36.668 21.2093 36.6588 21.367 36.614 21.5163L34.214 29.5163C34.1523 29.7224 34.0257 29.9031 33.8531 30.0315C33.6806 30.16 33.4712 30.2293 33.256 30.2293H21V32.2293H32V34.2293H20C19.7348 34.2293 19.4804 34.124 19.2929 33.9364C19.1054 33.7489 19 33.4945 19 33.2293V21.6433ZM20.5 38.2293C20.1022 38.2293 19.7207 38.0713 19.4394 37.79C19.1581 37.5087 19 37.1272 19 36.7293C19 36.3315 19.1581 35.95 19.4394 35.6687C19.7207 35.3874 20.1022 35.2293 20.5 35.2293C20.8978 35.2293 21.2794 35.3874 21.5607 35.6687C21.842 35.95 22 36.3315 22 36.7293C22 37.1272 21.842 37.5087 21.5607 37.79C21.2794 38.0713 20.8978 38.2293 20.5 38.2293ZM32.5 38.2293C32.1022 38.2293 31.7207 38.0713 31.4394 37.79C31.1581 37.5087 31 37.1272 31 36.7293C31 36.3315 31.1581 35.95 31.4394 35.6687C31.7207 35.3874 32.1022 35.2293 32.5 35.2293C32.8978 35.2293 33.2794 35.3874 33.5607 35.6687C33.842 35.95 34 36.3315 34 36.7293C34 37.1272 33.842 37.5087 33.5607 37.79C33.2794 38.0713 32.8978 38.2293 32.5 38.2293Z" fill="#770015"/>
                    </svg>
            </div>
            </div>
        </div>
        <p class="text-center md:text-lg text-base">
            {{info.title}}
        </p>
        <div class="text-center">
            <span class="text-xl font-bold">
                ₹ {{info.newPrice}}
            </span>
            <span class="text-red-700 strike ml-2">
                <s>
                    ₹ {{info.mainPrice}}
                </s>
            </span>
        </div>
        <div class="flex md:space-x-5 space-x-2 mt-3 justify-center">
            <div v-for="size in info.sizes"
                :key="size"
                class="border border-gray-200 md:py-2 py-1 md:w-12 w-8 text-center"
            >
                <span class="md:text-base text-sm font-semibold">
                    {{size}}
                </span>
            </div>

        </div>
    </div>
</template>
<script setup>
import { getImageUrl } from '../helpers/link';
import {ref} from "vue";

// A indicator to check wheather images load ! Tried to replicate api call
const imgLoaded = ref(false);

/**
 * Set Timeout function to enable images after 4 seconds
 */
const loadImg = setTimeout(() => {
    imgLoaded.value = true;
    loadImg();
}, 4000)

defineProps([
    "info"
])
</script>