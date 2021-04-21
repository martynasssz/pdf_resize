import loadPdfContent from './loadPdfContent.mjs';
import fs from 'fs';

export default async function pdfResize({url, xLowLeftConerMBox, yLowLeftConerMBox, widthMBox, heightMBox}) {

  const pdfDoc = await loadPdfContent(url);
  const pages = pdfDoc.getPages();  
  const page = pages[0];   
  const { x, y, width, height } = page.getMediaBox(); //mediaBox 
  page.setMediaBox(xLowLeftConerMBox, yLowLeftConerMBox, widthMBox, heightMBox);
  const pdfBytes = await pdfDoc.save();
  const path = './cropedPDF.pdf';
  fs.writeFileSync(path, pdfBytes);
  console.log('Modified PDF file written to:', path);
  return pdfBytes;
}

