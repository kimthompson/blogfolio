import { createRootRoute, Outlet } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Header, Footer } from '~/components/layout'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
})

const persister = createAsyncStoragePersister({
  storage: window.localStorage,
})

const RootLayout = () => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <div className="flex flex-col h-full w-screen overflow-x-clip overflow-y-scroll md:h-screen md:w-screen md:justify-between">
        {!location.pathname.includes('generate') && (
          <Header />
        )}
        <Outlet />
        {!location.pathname.includes('generate') && (
          <Footer />
        )}
      </div>
      {import.meta.env.MODE !== 'production' && (
        <>
          <TanStackRouterDevtools />
          <ReactQueryDevtools initialIsOpen />
        </>
      )}
    </PersistQueryClientProvider>
  )
}

export const Route = createRootRoute({ component: RootLayout })