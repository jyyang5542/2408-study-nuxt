<template>
  <section class="sec">
    <h1 class="sec__title">Swiper</h1>
    <Gnb />

    <swiper :modules="[Navigation, Pagination]" navigation :pagination="{ clickable: true }" :slides-per-view="1" :space-between="10" class="mySwiper">
      <swiper-slide class="sec__cont active">Slide 1</swiper-slide>
      <swiper-slide class="sec__cont active">Slide 2</swiper-slide>
      <swiper-slide class="sec__cont active">Slide 3</swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
</script>
