import { PDFDocument } from 'pdf-lib';
import fetch from 'node-fetch';

export default async function loadPdfContent() {
  const url = 'https://api.multiorders.com/labels/Blank90783-9000011_mass.pdf';
  const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  return pdfDoc;
}

