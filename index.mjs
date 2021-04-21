import { PDFDocument } from 'pdf-lib';
import { PageSizes } from 'pdf-lib';
import pdfResize from './crop.mjs';
import fs from 'fs';


const params = {
    url: 'https://api.multiorders.com/labels/Blank90783-9000011_mass.pdf',
    xLowLeftConerMBox: 0, //The x coordinate of the lower left corner of the new MediaBox.
    yLowLeftConerMBox: 0, //The y coordinate of the lower left corner of the new MediaBox.
    widthMBox: 290, //The width of the new MediaBox
    heightMBox: 432 //The height of the new MediaBox
}

async function EmbeddedMultiplePDF() {
  const orgPdf = await pdfResize(params);  

  const pdfDoc = await PDFDocument.create();  
  const page = pdfDoc.addPage(PageSizes.A4);  

  const [orgPdfArr] = await pdfDoc.embedPdf(orgPdf); 
 
  page.drawPage(orgPdfArr, {
    x: 0,
    y: page.getHeight() - orgPdfArr.height,    
  }); 

  page.drawPage(orgPdfArr, {
    x: page.getWidth()  - orgPdfArr.width ,
    y: page.getHeight() - orgPdfArr.height,       
  }); 

  page.drawPage(orgPdfArr, {
    x: page.getWidth()  - orgPdfArr.width,
    y: 0,    
  }); 

  page.drawPage(orgPdfArr, {
    x: 0,
    y: 0,    
  }); 
  
  const pdfBytes = await pdfDoc.save(); 
  const path = './embeddedPDF.pdf';
  fs.writeFileSync(path, pdfBytes);
  console.log('Modified PDF file written to:', path);
}

EmbeddedMultiplePDF();
