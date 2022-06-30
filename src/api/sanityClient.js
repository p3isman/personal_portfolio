import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: 'ehvglkoo',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

export const fetchAbouts = async () => {
  const query = '*[_type=="abouts"]'

  const data = await client.fetch(query)
  return data
}

export const fetchWorks = async () => {
  const query = '*[_type=="works"] | order(order asc)'

  const data = await client.fetch(query)
  return data
}
