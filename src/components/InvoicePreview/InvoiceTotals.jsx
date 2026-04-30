export function InvoiceTotal({ invoice, subtotal, taxAmount, total }) {
  return (
    <div style={{ marginTop: "30px", textAlign: "right" }}>
      <p>
        Sous-total HT : <strong>{subtotal} €</strong>
      </p>
      <p>
        TVA ({invoice.taxRate}%) : <strong>{taxAmount} €</strong>
      </p>
      <h3>Total TTC : {total} €</h3>
    </div>
  );
}
