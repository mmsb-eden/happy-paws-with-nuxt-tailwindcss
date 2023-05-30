<script setup lang="ts">
  import { isDark, toggleDark } from '~/composables/dark'
</script>
<template>
  <BaseButton
    variant="ghost"
    class="!rounded-lg mx-3"
    aria-label="Toggle theme"
    @click="toggleDark()"
  >
    <transition name="slide" mode="out-in">
      <Icon
        v-if="isDark"
        name="material-symbols:dark-mode-outline"
        class="text-2xl"
      >
      </Icon>
      <Icon v-else name="material-symbols:light-mode-outline" class="text-2xl">
      </Icon>
    </transition>
  </BaseButton>
</template>
<style lang="postcss">
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.15s ease;
  }

  .slide-enter-from {
    transform: translateY(-100%);
  }

  .slide-enter-to,
  .slide-leave-from {
    transform: translateY(0);
  }

  .slide-leave-to {
    transform: translateY(100%);
  }
</style>
