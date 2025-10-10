import { strapi } from '@strapi/client'
import { useQuery } from '@tanstack/react-query'
import { Document, DocumentResponse, DocumentResponseCollection } from 'node_modules/@strapi/client/dist/types/content-api'

const client = strapi({ 
  baseURL: import.meta.env.VITE_STRAPI_URL,
  auth: import.meta.env.VITE_STRAPI_API_TOKEN,
})

export function usePosts() {
  const posts = client.collection('posts')
  return useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<DocumentResponseCollection<Document>> => {
      return await posts.find({
        locale: 'en',
        sort: 'published:desc',
        populate: 'cover',
      })
    },
  })
}

export function usePost(documentId: string) {
  const posts = client.collection('posts')
  return useQuery({
    queryKey: [`post-${documentId}`],
    queryFn: async (): Promise<DocumentResponse<Document>> => {
      return await posts.findOne(documentId)
    },
  })
}

// testing the api without react-query
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