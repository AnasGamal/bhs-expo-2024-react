// sanity.js
import {createClient} from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'
import { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'



export const client = createClient({
  projectId: 'yaabocyz',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
  const posts = await client.fetch('*[_type == "blog_post"]')
  return posts
}

export async function getPostById(id) {
  const post = await client.fetch(`*[_type == "blog_post" && _id == "${id}"]`)
  return post[0]
}

export async function getPostBySlug(slug) {
  const post = await client.fetch(`*[_type == "blog_post" && slug.current == "${slug}"]`)
  return post[0]
}

export async function getPageBySlug(slug) {
  const page = await client.fetch(`*[_type == "page" && slug.current == "${slug}"]`)
  return page[0]
}

// export async function createPost(blog_post) {
//   const result = client.create(blog_post)
//   return result
// }

// export async function updateDocumentTitle(_id, title) {
//   const result = client.patch(_id).set({title})
//   return result
// }

