import Page from "../Page/Page";
import Invoices from "../Invoices/Invoices";
import Analitics from "../Analitics/Analitics";
export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement("script");
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}
function App() {
  return (
    <>
      <Page Invoices={<Invoices />} Analitics={<Analitics />} />

      {AddLibrary("../../app.min.js")}
    </>
  );
}

export default App;
