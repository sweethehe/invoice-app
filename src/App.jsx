import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { useInvoice } from "./hooks/useInvoice";
import { InvoiceForm } from "./components/InvoiceForm/InvoiceForm";
import { InvoicePreview } from "./components/InvoicePreview/InvoicePreview";
import { generatePdf } from "./utils/pdfGenerator";

function App() {
  const { invoice, addItem, updateItem, removeItem, updateField, updateNote, updateIban } =
    useInvoice();

  return (
    <>
    <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
      {/* F A C T U R E - F O R M */}
      <div style={{ flex: 1 }}>
        <InvoiceForm
          invoice={invoice}
          updateField={updateField}
          updateItem={updateItem}
          updateNote={updateNote}
          updateIban={updateIban}
          removeItem={removeItem}
          addItem={addItem}
        />
      </div>

      {/* P R E V I E W - F A C T U R E */}
      <div style={{ flex: 1 }}>
        <InvoicePreview invoice={invoice} />
      </div>

    </div>

    <button onClick={() => generatePdf(invoice)}>Télécharger le PDF</button>
    </>
  );
}

export default App;
