import { client } from '../api/sanityClient'

export const fetchWorks = async () => {
  const query = '*[_type=="works"] | order(order asc)'

  const data = await client.fetch(query)
  return data
}
