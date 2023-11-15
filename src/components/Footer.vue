<template>
    <footer class="w-full md:text-xl  text-sm font-normal leading-loose md:mt-20 mt-10 border-t border-gray-200 md:pt-20 pt-10">
        <div class="flex flex-col-reverse md:flex-row gap-x-10 w-full px-4 md:px-12 lg:px-28 pb-10">
            <div class="md:w-2/5 w-full ">
                <p class="text-base">
                    {{ moto }}
                </p>

                <div class="flex justify-evenly mt-5">
                    <img v-for="(social, index) in socials" :key="index" 
                    :src="getImageUrl(social)"
                    alt="social"
                    class="lg:w-16 md:w-12 w-8"
                    />
                </div>
            </div>
            <div class="md:w-3/5 w-full grid md:grid-cols-3 grid-cols-2 px-1">
                <div v-for="page in otherPages" :key="page.title" class="justify-self-center mb-6 px-2 flex-wrap">
                <h3 class="text-red-800 md:text-xl text-base md:mb-6 mb-2">
                    {{ page.title }}
                </h3>
                
                <p v-for="link in page.links" :key="link" class="py-1 md:text-base text-sm">
                    {{ link }}
                </p>
                </div>
                <div class="mb-6">
                    <h3  class="text-red-800  md:text-xl text-base md:mb-6 mb-2">
                        STORE INFORMATION
                    </h3>
                    
                    <div v-for="contact in contacts" :key="contact.text" class="py-1 md:text-base text-sm flex">
                        <component :is="contact.icon" class="w-1/12 mr-4 self-start pt-2" />
                        <p class="w-11/12"> {{ contact.text }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="md:py-4 py-1 bg-[#20050A] text-center text-white">
            &copy;2022-23 Powered by Dummy Team
        </div>
    </footer>
</template>
<script setup>
import { getImageUrl } from '../helpers/link';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline';

const moto = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries....";

const otherPages = [
    {
        title: "ONLINE SHOPPING",
        links: ["Men’s T-Shirts", "Women’s Wear", "Winter Collections", "Hooded T-Shirts", "Streetwear Collections"]
    },

    {
        title: "CUSTOMER POLICIES",
        links: ["Men’s T-Shirts", "Women’s Wear", "Winter Collections", "Hooded T-Shirts", "Streetwear Collections"]
    },
]

const contacts = [
    {
        icon: MapPinIcon,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
        icon: PhoneIcon,
        text: "Call us: 1235676798",
    },
    {
        icon: EnvelopeIcon,
        text: "Email Us: info@yourmail.com"
    }
];

const socials = [
    'fb-logo.svg', 'insta-logo.svg', 'twitter-logo.svg'
]

</script>
<style scoped>
h3 {
    font-family: Playfair Display;
}
</style>