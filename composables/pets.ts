import pets from '~/data/db.json'

export function usePets() {
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
