<script setup lang="ts">
  import { pg_background_urls } from '~~/themes/pg-tailwindcss/tokens.mjs'

  const heroImageSrc =
    pg_background_urls['design-image-large'] ||
    pg_background_urls['design-image']

  const img = useImage()
  const _srcset = computed(() => {
    return img.getSizes(heroImageSrc, {
      sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
      densities: 'x1 x2',
      modifiers: {
        format: 'webp',
        quality: 70,
        height: 800,
      },
    })
  })

  // https://dev.to/ingosteinke/responsive-background-images-with-image-set-the-srcset-for-background-image-259a
  const responsiveBgImages = computed(() => {
    return _srcset.value.srcset
      .split(', ')
      .filter((imgUrl) => imgUrl.endsWith('768w') || imgUrl.endsWith('2560w'))
  })

  const responsiveBgImageSrc = computed(() => {
    return {
      'background-image': `url("${responsiveBgImages.value[0]}")`,
    }
  })

  const responsiveBgImageSrcImageSet = computed(() => {
    return {
      'background-image': `image-set(
    url("${responsiveBgImages.value[0]}") 1x,
    url("${responsiveBgImages.value[1]}") 2x)`,
    }
  })

  const responsiveBgImageSrcImageSetFallback = computed(() => {
    return {
      'background-image': `-webkit-image-set(
    url("${responsiveBgImages.value[0]}") 1x,
    url("${responsiveBgImages.value[1]}") 2x)`,
    }
  })
</script>

<template>
  <section class="container mx-auto pb-12 px-4">
    <div
      class="bg-center bg-cover bg-no-repeat blur-none rounded-3xl z-0"
      :style="[
        responsiveBgImageSrc,
        responsiveBgImageSrcImageSet,
        responsiveBgImageSrcImageSetFallback,
      ]"
    >
      <div class>
        <div class="lg:px-12 md:py-36 pb-6 pt-72 px-6 relative rounded-3xl">
          <div
            class="-mx-4 flex flex-wrap items-center mt-24 space-y-6 lg:space-y-0"
          >
            <div class="px-4 w-full md:w-8/12 xl:w-6/12">
              <h4
                class="font-bold font-serif mb-1 text-primary-600 dark:text-primary-200 uppercase"
              >
                Adopt A Pet
              </h4>
              <h1 class="capitalize leading-tight mb-2 text-white">
                Thousands of homeless dogs, one act of kindness
              </h1>
              <p class="font-thin mb-6 text-gray-300">
                Find your new furry friend today! We have a wide variety of
                lovable pets available for adoption. Come visit us and take home
                your new best friend!
              </p>
              <BaseButton
                size="xl"
                label="Adopt Now"
                target="_blank"
                to="https://github.com/pinegrow/happy-paws-with-nuxt-tailwindcss"
              >
                <div class="inline-block ml-1 p-1.5 text-lg">Adopt Now</div>
                <BaseIcon name="i-noto-dog-face" height="28px"></BaseIcon>
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
