import { useState } from "react";
import heroImg from "./assets/hero.png";
import { useInvoice } from "./hooks/useInvoice";
import { InvoiceForm } from "./components/InvoiceForm/InvoiceForm";
import { InvoicePreview } from "./components/InvoicePreview/InvoicePreview";
import { generatePdf } from "./utils/pdfGenerator";
import { Home } from "./home";

function App() {
  const {
    invoice,
    invoiceList,
    saveInvoice,
    loadInvoice,
    createNewInvoice,
    addItem,
    updateItem,
    removeItem,
    updateField,
    updateNote,
    updateIban,
    updateLogo,
  } = useInvoice();

  const [currentView, setCurrentView] = useState("home");

  const handleCreateNew = () => {
    createNewInvoice();
    setCurrentView("editor");
  };

  const handleEdit = (invoiceId) => {
    loadInvoice(invoiceId);
    setCurrentView("editor");
  };

  const handleSaveAndHome = () => {
    saveInvoice();
    setCurrentView("home");
  };

  if (currentView === "home") {
    return (
      <Home
        invoiceList={invoiceList}
        onCreateNew={handleCreateNew}
        onEdit={handleEdit}
      />
    );
  }

  return (
    <>
      <div style={{ padding: "20px" }}>
        <button className="download-btn" onClick={() => setCurrentView("home")}>
          ← Retour à l'accueil
        </button>
      </div>

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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
              gap: "20px",
            }}
          >
            <button
              className="download-btn"
              onClick={() => generatePdf(invoice)}
            >
              Télécharger le PDF
            </button>

            <button
              className="download-btn"
              onClick={handleSaveAndHome}
            >
              Enregistrer la facture
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
