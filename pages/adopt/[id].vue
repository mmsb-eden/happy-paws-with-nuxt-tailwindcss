<script setup lang="ts">
  const pet = usePet()

  useHead({
    title: () => pet.value?.name,
  })
</script>
<template>
  <div id="sheet" class="py-12">
    <div class="container mx-auto px-4 relative">
      <div class="container mx-auto pl-12 pr-8 pt-4 relative">
        <div class="px-8">
          <div class="flex flex-wrap lg:justify-between">
            <div class="py-4 text-center w-full lg:w-fit">
              <NuxtLink to="/adopt">
                <BaseButton id="base-button">
                  <span>&lt;- Go Back</span>
                </BaseButton>
              </NuxtLink>
            </div>
            <div class="text-center w-full lg:w-fit">
              <h3 class="capitalize">{{ pet.name }}</h3>
              <h6 class="uppercase">Animal ID: {{ pet.id }}</h6>
            </div>
            <div
              class="flex items-center justify-center py-4 space-x-4 text-center w-full lg:w-fit"
            >
              <Icon name="ph:envelope-simple-duotone" size="28px"></Icon>
              <Icon name="logos:whatsapp-icon" size="28px"></Icon>
              <Icon name="logos:facebook" size="28px"></Icon>
              <Icon name="logos:twitter" size="28px"></Icon>
            </div>
          </div>
          <div class="flex flex-wrap pt-8 w-full lg:flex-nowrap">
            <div
              class="flex flex-wrap justify-center text-center w-full lg:flex-nowrap lg:text-left"
            >
              <div id="sheet" class="w-full">
                <img
                  :src="pet.imageUrl"
                  class="rounded-xl w-full"
                  alt="..."
                  width="600"
                  height="600"
                />
              </div>
              <div id="sheet" class="py-8 w-full sm:px-16">
                <ul>
                  <li class="mb-4">
                    <span class="font-semibold">Breed:</span
                    ><span class="ml-2">{{ pet.breed }}</span>
                  </li>
                  <li class="mb-4">
                    <span class="font-semibold">Age:</span
                    ><span class="ml-2">{{ pet.dateOfBirth }}</span>
                  </li>
                  <li class="mb-4">
                    <span class="font-semibold">Gender:</span
                    ><span class="ml-2">{{ pet.sex }}</span>
                  </li>
                  <li class="mb-4">
                    <span class="font-semibold">Microchip No:</span
                    ><span class="ml-2">{{ pet.microchip }}</span>
                  </li>
                  <li class="mb-4">
                    <Icon
                      name="material-symbols:add-location-alt-outline-rounded"
                      size="28px"
                      class="-ml-1 font-semibold"
                    ></Icon
                    ><span class="ml-2">{{ pet.location }}</span>
                  </li>
                  <li class="mb-4">
                    <span class="font-semibold">Includes:</span
                    ><span class="ml-2">Vaccination</span>
                  </li>
                </ul>
              </div>
              <div
                id="sheet"
                class="max-w-xs py-8 rounded-xl w-full sm:px-8 pg-primary pg-on-primary-text"
              >
                <ul>
                  <li>
                    <Icon
                      name="material-symbols:check-box-outline"
                      size="28px"
                    ></Icon>
                    <h6 class="inline-block ml-2">Done</h6>
                  </li>
                  <li class="mt-4">
                    <Icon name="twemoji:sparkling-heart" size="24px"></Icon
                    ><span class="ml-2">Health Check</span>
                  </li>
                  <li class="mt-4">
                    <Icon
                      name="bx:bxs-microchip"
                      size="24px"
                      class="pg-tertiary-text"
                    ></Icon
                    ><span class="ml-2">Microchipped</span>
                  </li>
                  <li class="mt-4">
                    <Icon name="twemoji:worm" size="24px"></Icon
                    ><span class="ml-2">De-wormed</span>
                  </li>
                  <li class="mt-4">
                    <Icon
                      name="healthicons:sexual-reproductive-health-outline"
                      size="24px"
                      class="text-indigo-600"
                    ></Icon
                    ><span class="ml-2">De-sexed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="mt-8 px-8 text-center lg:text-left">
            <p>
              To adopt <span class="mx-1 pg-primary-text">{{ pet.name }} </span
              ><span>or learn more, please visit our adoption centre at </span
              ><span class="mx-1 pg-primary-text">{{ pet.location }}.</span
              ><span
                >Appointments are not required and walk-ins are welcome.</span
              >
            </p>
            <p class="mt-2">
              Alternatively, please contact our {{ pet.location }} team directly
              on <span class="pg-primary-text">03 2394 3284</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
