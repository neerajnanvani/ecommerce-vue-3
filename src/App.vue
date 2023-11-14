<template>
  <div>
    <Header />
    <Hero />
    <MainCategories />
    <Promotions />
    <ListingSection title="Tshirt collection" :products="firstListing" />
    <ListingSection title="Featured Products" :products="secondListing" />
    <Banner image="banner2.png" />
    <ListingSection title="Best selling Products" :products="thirdListing" />
    <SecondCategories />
    <Banner image="banner1.png" />
    <Promotions2 />
    <Features />
  </div>
</template>
<script setup>
import Banner from './components/Banner.vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import ListingSection from './components/ListingSection.vue';
import MainCategories from './components/MainCategories.vue';
import Promotions from './components/Promotions.vue';
import SecondCategories from './components/SecondCategories.vue';
import Promotions2 from './components/Promotions2.vue';
import Features from './components/Features.vue';

import { firstListing, secondListing, thirdListing } from './resources';

</script>

