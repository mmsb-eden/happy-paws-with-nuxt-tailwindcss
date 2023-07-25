import { pets } from '~/db.json'

// const apiBaseUrl =
//   'https://my-json-server.typicode.com/pinegrow/happy-paws-with-nuxt-tailwindcss'

export function usePets() {
  return pets
  // return $fetch(`${apiBaseUrl}/pets`)
}

export function usePet(id) {
  return pets.find((pet) => `${pet.id}` === id)
  // return $fetch(`${apiBaseUrl}/pets/${id}`)
}
