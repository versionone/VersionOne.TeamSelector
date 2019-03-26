import chroma from 'chroma-js';
import { shuffle } from 'underscore';

class Theme {
    seed() {
        this.palette = shuffle(this.palette);
    }

    getCardColor(card, index, total) {
        throw new Error('not implemented');
    }
}

class Classic extends Theme {
    constructor() {
        super();

        this.palette = [
            "#976e98", // purple
            "#53c68c", // green
            "#2980b9", // blue
            "#f08675", // red
            "#f0dc89", // yellow
        ];
    }

    getCardColor(card, index, total) {
        return this.palette[index % this.palette.length];
    }
}

class Fade extends Theme {
    constructor() {
        super();

        this.palette = [
            '#e38b2d' /* CN orange */,
            '#802145' /* V1 purp */,
        ];
    }

    seed() {
        this.palette.reverse();
    }

    getCardColor(card, index, total) {
        return chroma
            .scale(this.palette)
            .mode('lab')
            .colors(total)[index];
    }
}

export { Classic, Fade };
