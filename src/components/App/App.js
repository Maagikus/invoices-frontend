import Page from "../Page/Page";
import Invoices from "../Invoices/Invoices";
import Analitics from "../Analitics/Analitics";
import Transaction from "../Transaction/Transaction";
import Refound from "../Refound/Refound";

export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement("script");
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}
function App() {
  return (
    <>
      <Page
        Transaction={<Transaction />}
        Invoices={<Invoices />}
        Analitics={<Analitics />}
        Refound={<Refound />}
      />

      {AddLibrary("../../app.min.js")}
    </>
  );
}

export default App;
