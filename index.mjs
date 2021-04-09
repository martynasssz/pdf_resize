import pdfResize from './crop.mjs';

const params = {
    url: 'https://api.multiorders.com/labels/Blank90783-9000011_mass.pdf',
    xLowLeftConerMBox: 0, //The x coordinate of the lower left corner of the new MediaBox.
    yLowLeftConerMBox: 0, //The y coordinate of the lower left corner of the new MediaBox.
    widthMBox: 290, //The width of the new MediaBox
    heightMBox: 300 //The height of the new MediaBox
}


pdfResize(params);