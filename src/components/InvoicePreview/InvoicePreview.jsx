import reactLogo from "../../assets/react.svg";
import {
  calculateSubtotal,
  calculateTaxAmount,
  calculateTotal,
} from "../../utils/calculations";
import { formatDate } from "../../utils/formatters";
import { InvoiceFooter } from "./InvoiceFooter";
import { InvoiceHeader } from "./InvoiceHeader";
import { InvoiceTable } from "./InvoiceTable";
import { InvoiceTotal } from "./InvoiceTotals";

export function InvoicePreview({ invoice }) {
  const subtotal = calculateSubtotal(invoice.items);
  const taxAmount = calculateTaxAmount(subtotal, invoice.taxRate);
  const total = calculateTotal(subtotal, taxAmount);

  return (
    <div
      id="invoice-preview"
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        backgroundColor: "white",
      }}
    >
      {/* F A C T U R E  -  H E A D E R */}
      <InvoiceHeader invoice={invoice} />

      <hr />

      {/* EMETTEUR ET CLIENT */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
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
      <InvoiceTable invoice={invoice} />

      {/* TOTAUX */}
      <InvoiceTotal invoice={invoice} subtotal={subtotal} taxAmount={taxAmount} total={total}/>

      {/* FOOTER */}
      <InvoiceFooter invoice={invoice}/>
    </div>
  );
}
