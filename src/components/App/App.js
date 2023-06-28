import MainPage from "../../pages/mainPage/mainPage";
import Providers from "../../pages/providers/providers";
import SingleProvider from "../../pages/singleProvider/singleProvider";
import Page from "../Page/Page";

export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement("script");
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}
function App() {
  return (
    <>
      {/* <Page /> */}

      <SingleProvider />

      {AddLibrary("../../app.min.js")}
    </>
  );
}

export default App;
