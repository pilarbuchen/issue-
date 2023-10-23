import React from 'react';
import { createBoard } from '@wixc3/react-board';
import SampleComp from './samplecomp.js';

export default createBoard({
    name: 'Sample',
    Board: () => <div className="simulation">
        <SampleComp />
    </div>,
    isSnippet: true,
});
