import * as prismicio from '@prismicio/client'

const repo = 'ignite-gnews'
const endpoint = prismicio.getEndpoint(repo)

export function getPrismicClient() {
    const prismic = prismicio.createClient(
      endpoint,
      {
        accessToken: process.env.PRISMIC_ACCESS_TOKEN
      }
    )
  
    return prismic
}