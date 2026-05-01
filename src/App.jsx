import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { useInvoice } from "./hooks/useInvoice";
import { InvoiceForm } from "./components/InvoiceForm/InvoiceForm";
import { InvoicePreview } from "./components/InvoicePreview/InvoicePreview";
import { generatePdf } from "./utils/pdfGenerator";

function App() {
  const { invoice, addItem, updateItem, removeItem, updateField, updateNote, updateIban, updateLogo } =
    useInvoice();

  return (
    <>
    <div className="app-container">

      {/* F A C T U R E - F O R M */}
      <div className="app-column">
        <InvoiceForm
          invoice={invoice}
          updateField={updateField}
          updateItem={updateItem}
          updateNote={updateNote}
          updateIban={updateIban}
          updateLogo={updateLogo}
          removeItem={removeItem}
          addItem={addItem}
        />
      </div>

      {/* P R E V I E W - F A C T U R E */}
      <div className="app-column">
        <InvoicePreview invoice={invoice} />
        <button className="download-btn" onClick={() => generatePdf(invoice)}>
          Télécharger le PDF
        </button>
      </div>

    </div>
    </>
  );
}

export default App;
