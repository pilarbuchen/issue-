import React from 'react';
import { createBoard } from '@wixc3/react-board';
import SampleComp from './samplecomp.js';
import '@testout/simdependencies/syles/sims.css';
export default createBoard({
    name: 'Sample',
    Board: () => React.createElement("div", { className: "simulation" },
        React.createElement(SampleComp, null)),
    isSnippet: true,
});
//# sourceMappingURL=sample.board.js.map