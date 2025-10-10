import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Header, Footer } from '~/components/layout'

const RootLayout = () => (
  <>
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
      </>
    )}
  </>
)

export const Route = createRootRoute({ component: RootLayout })