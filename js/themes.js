import chroma from 'chroma-js';

class Theme {
    getCardColor(card, index, total) {
        throw new Error('not implemented');
    }
}

class Classic extends Theme {
    getCardColor(card, index, total) {
        const palette = [
            "#976e98", // purple
            "#53c68c", // green
            "#2980b9", // blue
            "#f08675", // red
            "#f0dc89", // yellow
        ];

        return palette[index % palette.length];
    }
}

class Fade extends Theme {
    getCardColor(card, index, total) {
        return chroma
            .scale(['#e38b2d' /* CN orange */, '#802145' /* V1 purp */])
            .mode('lab')
            .colors(total)[index];
    }
}

export { Classic, Fade };
