<template>
  <section class="sec">
    <h1 class="sec__title">Swiper</h1>
    <Gnb />

    <swiper :modules="[Navigation, Pagination, Autoplay]" :autoplay="{ delay: 2000 }" loop navigation :pagination="{ clickable: true }" :slides-per-view="1" :space-between="10" class="mySwiper">
      <swiper-slide v-for="index in 6" class="sec__cont active">Slide {{ index }}</swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
</script>

<style lang="scss" scoled>
.swiper-button-prev,
.swiper-button-next {
  &::before,
  &::after {
    font-size: 15px;
    font-family: Arial, Georgia, 'Times New Roman', Times, serif !important;
  }
}
</style>
