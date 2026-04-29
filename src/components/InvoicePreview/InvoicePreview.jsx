import reactLogo from '../../assets/react.svg';
import { calculateSubtotal, calculateTaxAmount, calculateTotal } from '../../utils/calculations';
import { formatDate } from '../../utils/formatters';

export function InvoicePreview({ invoice }) {
  const subtotal = calculateSubtotal(invoice.items);
  const taxAmount = calculateTaxAmount(subtotal, invoice.taxRate);
  const total = calculateTotal(subtotal, taxAmount);

  return (
    <div id="invoice-preview" style={{ padding: '20px', border: '1px solid #ccc', backgroundColor: 'white' }}>
      {/* HEADER */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h1>Facture n° {invoice.details.number}</h1>
          <p>Date : {invoice.details.date}</p>
          <p>Échéance : {formatDate(invoice.details.dueDate)}</p>
        </div>
        <img src={reactLogo} alt="Logo" width="100" />
      </div>

      <hr />

      {/* EMETTEUR ET CLIENT */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <div>
          <h3>Émetteur</h3>
          <p>{invoice.sender.name}</p>
          <p>{invoice.sender.address}</p>
          <p>{invoice.sender.email}</p>
        </div>
        <div>
          <h3>Client</h3>
          <p>{invoice.client.name}</p>
          <p>{invoice.client.address}</p>
          <p>{invoice.client.email}</p>
        </div>
      </div>

      {/* TABLEAU DES ARTICLES */}
      <table style={{ width: '100%', marginTop: '30px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid black' }}>
            <th style={{ textAlign: 'left' }}>Description</th>
            <th>Quantité</th>
            <th>Prix Unitaire</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
              <td>{item.description}</td>
              <td style={{ textAlign: 'center' }}>{item.quantity} {item.unit}</td>
              <td style={{ textAlign: 'center' }}>{item.price} €</td>
              <td style={{ textAlign: 'center' }}>{item.quantity * item.price} €</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* TOTAUX */}
      <div style={{ marginTop: '30px', textAlign: 'right' }}>
        <p>Sous-total HT : <strong>{subtotal} €</strong></p>
        <p>TVA ({invoice.taxRate}%) : <strong>{taxAmount} €</strong></p>
        <h3>Total TTC : {total} €</h3>
      </div>
    </div>
  );
}
