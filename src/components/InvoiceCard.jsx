export function InvoiceCard({ invoice, onClick }) {
  const { number, date } = invoice.details;
  const clientName = invoice.client.name;

  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        cursor: "pointer",
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h3>Facture n° {number}</h3>
      <p><strong>Client :</strong> {clientName || "Non renseigné"}</p>
      <p><strong>Date :</strong> {date}</p>
      <div style={{ marginTop: "15px", textAlign: "right" }}>
        <button style={{ padding: "5px 10px", cursor: "pointer" }}>
          Modifier
        </button>
      </div>
    </div>
  );
}