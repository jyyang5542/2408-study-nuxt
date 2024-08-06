<template>
  <section class="sec">
    <h1 class="sec__title" :style="{ color: color }">Main</h1>
    <Gnb />

    <div class="sec__cont active">
      <div class="grid">
        <div class="grid__item grid__item--1">a</div>
        <div class="grid__item grid__item--2">b</div>
        <div class="grid__item grid__item--3">c</div>
        <div class="grid__item grid__item--4">d</div>
        <div class="grid__item grid__item--5">e</div>
        <div class="grid__item grid__item--6">f</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    // default: 'blue',
  },
});

function changeTextColor(color) {
  document.querySelector('h1').style.color = color;
}

function changeFontSize(fontSize) {
  document.querySelector('h1').style.fontSize = fontSize;
}

onMounted(() => {
  //   changeTextColor(state.color);
  // changeFontSize(state.fontSize);
});

onUnmounted(() => {});
</script>

<style lang="scss">
.grid {
  display: grid;
  width: 100%;
  height: 500px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  grid-template-areas:
    'a a a e'
    'b c c e'
    'b d d e'
    'b f f f';

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    border-radius: 10px;
    background-color: #ddd;

    &--1 {
      grid-area: a;
    }
    &--2 {
      grid-area: b;
    }
    &--3 {
      grid-area: c;
    }
    &--4 {
      grid-area: d;
    }
    &--5 {
      grid-area: e;
    }
    &--6 {
      grid-area: f;
    }
  }
}
</style>
