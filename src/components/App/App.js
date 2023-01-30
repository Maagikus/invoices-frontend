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
      <Page />

      {AddLibrary("../../app.min.js")}
    </>
  );
}

export default App;
