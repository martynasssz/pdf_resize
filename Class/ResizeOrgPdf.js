import { PDFDocument } from 'pdf-lib';
import fetch from 'node-fetch';
import fs from 'fs';

export default class ResizeOrgPdf {
    constructor(url) {
        this.url = url;
    }

    async loadPdfContent() {
        const existingPdfBytes = await fetch(this.url).then(res => res.arrayBuffer());
        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        return pdfDoc;
        //return await Promise.resolve(pdfDoc);
    }

    async getAllPdfPages() {
        const loadedPdf = await this.loadPdfContent(this.url);
        const pages = loadedPdf.getPages();
        return pages; 
    }

    async getSinglePdfPage(number) {
        const pages = await this.getAllPdfPages();
        const singlePage = pages[number];
        return singlePage;            
    }   
}