import { strapi } from '@strapi/client'

const client = strapi({ 
  baseURL: import.meta.env.VITE_STRAPI_URL,
  auth: import.meta.env.VITE_STRAPI_API_TOKEN,
})

export async function getPosts() {
  const posts = client.collection('posts') 
  return await posts.find({
    locale: 'en',
    sort: 'published:desc',
    populate: 'cover',
  })
}

export function testGetPosts() {
  getPosts().then((res) => console.log(res)).catch((err) => console.error(err))
}