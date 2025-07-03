import { Route, Routes } from "react-router-dom";
import pages from "@pages/pages.ts";
import layouts from "@layouts/layouts";

function App() {

  return (
    <>
      <layouts.Header />
      <Routes>
        <Route path={"*"} element={<div><p>404</p></div>} />
        <Route path={"/"} element={ <pages.Home /> } />
      </Routes>
      <layouts.Footer />
    </>
  )
}

export default App
