export function InvoiceTable({invoice}) {
  return (
    <table
      style={{ width: "100%", marginTop: "30px", borderCollapse: "collapse" }}
    >
      <thead>
        <tr style={{ borderBottom: "2px solid black" }}>
          <th style={{ textAlign: "left" }}>Description</th>
          <th>Quantité</th>
          <th>Prix Unitaire</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {invoice.items.map((item, index) => (
          <tr key={index} style={{ borderBottom: "1px solid #ccc" }}>
            <td>{item.description}</td>
            <td style={{ textAlign: "center" }}>
              {item.quantity} {item.unit}
            </td>
            <td style={{ textAlign: "center" }}>{item.price} €</td>
            <td style={{ textAlign: "center" }}>
              {item.quantity * item.price} €
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
