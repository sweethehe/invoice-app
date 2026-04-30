import { InvoiceHeader } from "../InvoicePreview/InvoiceHeader";
import { FormSection } from "./FormSection";
import { LineItemRow } from "./LineItemRow";

export function InvoiceForm({
  invoice,
  updateField,
  updateItem,
  updateIban,
  updateNote,
  removeItem,
  addItem,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <h2>Bienvenue sur cette application de Génération de Factures !</h2>

      {/* D É T A I L S   F A C T U R E */}
      <h3>Détails de la facture</h3>
      <div>
        <label>Date d'échéance : </label>
        <input
          type="date"
          value={invoice.details.dueDate}
          onChange={(e) => updateField("details", "dueDate", e.target.value)}
        />
      </div>

      {/* S E C T I O N  -  EMETTEUR / CLIENT */}
      <div>
        <div style={{ flex: 1 }}>
          <FormSection
            title="Émetteur"
            sectionName="sender"
            data={invoice.sender}
            updateField={updateField}
          />
        </div>
        <div style={{ flex: 1 }}>
          <FormSection
            title="Client"
            sectionName="client"
            data={invoice.client}
            updateField={updateField}
          />
        </div>
      </div>

      {/* S E C T I O N  -  LIST - OF - ITEMS */}
      <div>
        <h3>Articles</h3>
        <table style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantité</th>
              <th>Unité</th>
              <th>Prix</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item, index) => (
              <tr key={index}>
                <td>
                  <LineItemRow
                    type={"text"}
                    value={item.description}
                    onChange={(e) =>
                      updateItem(index, "description", e.target.value)
                    }
                  />
                </td>
                <td>
                  <LineItemRow
                    type={"number"}
                    value={item.quantity}
                    onChange={(e) =>
                      updateItem(index, "quantity", Number(e.target.value))
                    }
                  />
                </td>
                <td>
                  <LineItemRow
                    type={"text"}
                    value={item.unit}
                    onChange={(e) => updateItem(index, "unit", e.target.value)}
                  />
                </td>
                <td>
                  <LineItemRow
                    type={"number"}
                    value={item.price}
                    onChange={(e) =>
                      updateItem(index, "price", Number(e.target.value))
                    }
                  />
                </td>
                <td>
                  <button onClick={() => removeItem(index)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* A D D - AN - I T E M */}
        <button onClick={addItem} style={{ marginTop: "10px" }}>
          + Ajouter une ligne
        </button>

        {/* W R I T E - N O T E - I B A N */}
        <div style={{ marginTop: "20px" }}>

          <h3>Ecrivez une note</h3>
          <LineItemRow
            type={"text"}
            value={invoice.notes}
            onChange={(e) => updateNote(e.target.value)}
          />

          <h3>Ecrivez votre IBAN</h3>
          <LineItemRow
            type={"text"}
            value={invoice.iban}
            onChange={(e) => updateIban(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
