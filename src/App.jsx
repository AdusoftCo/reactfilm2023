import { RouterProvider } from "react-router-dom"
import RootProvider from "./core/providers/root_provider"
import { appRouter } from "./core/routes/app_router"


const App = () => {
  return (
    <>
      <RootProvider>
        <RouterProvider router={appRouter} />
      </RootProvider>
    </>
  )
}

export default App;
