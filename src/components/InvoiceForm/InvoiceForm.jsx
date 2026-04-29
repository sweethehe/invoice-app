import { FormSection } from "./FormSection";

export function InvoiceForm({
  invoice,
  updateField,
  updateItem,
  removeItem,
  addItem,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
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
      <div style={{ display: "flex", gap: "20px" }}>
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
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) =>
                      updateItem(index, "description", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateItem(index, "quantity", Number(e.target.value))
                    }
                    style={{ width: "60px" }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.unit}
                    onChange={(e) => updateItem(index, "unit", e.target.value)}
                    style={{ width: "60px" }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) =>
                      updateItem(index, "price", Number(e.target.value))
                    }
                    style={{ width: "80px" }}
                  />
                </td>
                <td>
                  <button onClick={() => removeItem(index)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={addItem} style={{ marginTop: "10px" }}>
          + Ajouter une ligne
        </button>
      </div>
    </div>
  );
}
