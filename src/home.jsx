import { InvoiceCard } from "./components/InvoiceCard";

export function Home({ invoiceList, onCreateNew, onEdit }) {
  const invoices = Object.values(invoiceList);

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{marginBottom: "40px" }}>
        <h1 style={{marginBottom: "60px", display: "flex", justifyContent:"center"}}>Bienvenue sur cette application de Génération de Factures !</h1>
        <h2>Mes différentes Factures</h2>
      </div>

      {invoices.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "50px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            color: "#666",
          }}
        >
          <p>Vous n'avez pas encore de factures enregistrées.</p>
          <p>Cliquez sur "Nouvelle facture" pour commencer !</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {invoices.map((invoice) => (
            <InvoiceCard
              key={invoice.details.number}
              invoice={invoice}
              onClick={() => onEdit(invoice.details.number)}
            />
          ))}
        </div>
      )}

      <button
        className="download-btn"
        onClick={onCreateNew}
        style={{ backgroundColor: "#4CAF50" }}
      >
        + Nouvelle facture
      </button>
    </div>
  );
}
