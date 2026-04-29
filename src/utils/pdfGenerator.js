import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const generatePdf = async (invoice) => {

  const element = document.getElementById("invoice-preview");
  if (!element) {
    console.error("L'élément de prévisualisation est introuvable.");
    return;
  }

  try {
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    const safeClientName = invoice.client.name.replace(/\s+/g, '-');
    const fileName = `FAC-${invoice.details.date}-${invoice.details.number}_${safeClientName}.pdf`;

    pdf.save(fileName);
  } catch (error) {
    console.error("Erreur lors de la génération du PDF", error);
  }
};
