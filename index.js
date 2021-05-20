import ResizeOrgPdf from './Class/ResizeOrgPdf.js';

const pdf = new ResizeOrgPdf('https://pdf-lib.js.org/assets/us_constitution.pdf');
const pdfDoc = pdf.getAllPdfPages().then(result => console.log(result)); //getting result   
    


