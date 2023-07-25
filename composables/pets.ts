import { pets } from '~/db.json'

export function usePets() {
  // const pets = $fetch(
  //   'https://my-json-server.typicode.com/pinegrow/happy-paws-with-nuxt-tailwindcss/pets',
  // )
  return pets
}

export function usePet() {
  const pets = usePets()
  const route = useRoute()

  const pet = computed(() => {
    return pets.find((pet) => `${pet.id}` === route.params.id)
  })
  return pet
}
