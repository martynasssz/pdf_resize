import { PDFDocument } from 'pdf-lib';
import fetch from 'node-fetch';

export default async function loadPdfContent(url) {  
  const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  return pdfDoc;
}

