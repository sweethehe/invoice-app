export function InvoiceFooter ({invoice}) {
    return (
        <div>
            <hr/>
            <h3>Remarques</h3>
            <p>{invoice.notes}</p>

            <h3>Paiement par virement bancaire</h3>

            <p>Mon IBAN : {invoice.iban}</p>
        </div>
    );
}