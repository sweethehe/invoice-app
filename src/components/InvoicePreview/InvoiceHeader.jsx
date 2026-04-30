import reactLogo from "../../assets/react.svg";
import { formatDate } from "../../utils/formatters";

export function InvoiceHeader({invoice}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h1>Facture n° {invoice.details.number}</h1>
        <p>Date : {invoice.details.date}</p>
        <p>Échéance : {formatDate(invoice.details.dueDate)}</p>
      </div>
      <img src={reactLogo} alt="Logo" width="100" />
    </div>
  );
}
