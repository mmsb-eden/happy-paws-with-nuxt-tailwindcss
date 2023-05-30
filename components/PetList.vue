<script setup lang="ts">
  const { data: pets } = await useAsyncData('pets', async () => {
    const pets = usePets()
    return pets.sort()
  })
</script>
<template>
  <div>
    <div class="container mx-auto px-4 relative">
      <div class="flex flex-wrap -mx-4 justify-center">
        <PetCard v-for="(pet, index) in pets" v-bind="pet" :key="index" class>
        </PetCard>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
