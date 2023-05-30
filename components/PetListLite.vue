<script setup lang="ts">
  const { data: petsLite } = await useAsyncData('pets', async () => {
    const pets = usePets()
    return pets.sort().slice(0, pets.length / 2)
  })
</script>
<template>
  <div class="pg-primary-container">
    <div class="pb-24 pt-12">
      <div class="container mx-auto px-4 relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center justify-center mb-4"
        >
          <div class="px-4 text-center w-full">
            <h6 class="pg-primary-container-text uppercase">Adopt A Pet</h6>
            <h3 class="capitalize">Small Gesture For A Big Impact</h3>
            <p class="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae congue tortor.
            </p>
          </div>
          <div class="px-4 text-center w-full">
            <BaseButton size="xl" to="/adopt" color="secondary">
              <span>Meet Them All ></span>
            </BaseButton>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4 justify-center">
          <PetCard v-for="(pet, index) in petsLite" v-bind="pet" :key="index">
          </PetCard>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
