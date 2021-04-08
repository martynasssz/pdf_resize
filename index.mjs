import loadPdfContent from './loadPdfContent.mjs';
import fs from 'fs';

export async function pdfResize() {

  const pdfDoc = await loadPdfContent();
  const pages = pdfDoc.getPages();  
  const page = pages[0];
  const { x, y, width, height } = page.getMediaBox(); //mediaBox

  //console.log(x, y, width, height);  
  page.setMediaBox(0, 0, 290, 432);

  const pdfBytes = await pdfDoc.save();
  const path = './modified.pdf';
  fs.writeFileSync(path, pdfBytes);
  console.log('Modified PDF file written to:', path);
}

pdfResize();