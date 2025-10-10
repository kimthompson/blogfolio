import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { strapi } from '@strapi/client'

const client = strapi({ 
  baseURL: import.meta.env.VITE_STRAPI_URL,
  auth: import.meta.env.VITE_STRAPI_API_TOKEN,
})

async function getPosts() {
  const posts = client.collection('posts') 
  return await posts.find({
    locale: 'en',
    sort: 'published:desc',
    populate: 'cover',
  })
}

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    getPosts().then((res) => console.log(res)).catch((err) => console.error(err))
  })

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
