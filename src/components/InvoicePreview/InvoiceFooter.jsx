export function InvoiceFooter ({invoice}) {
    return (
        <div>
            <hr style={{marginBottom: 20}}/>
            <h3>Remarques</h3>
            <p>{invoice.notes}</p>

            <h3 style={{ marginTop: 20 }}>Paiement par virement bancaire</h3>

            <p>Mon IBAN : {invoice.iban}</p>
        </div>
    );
}