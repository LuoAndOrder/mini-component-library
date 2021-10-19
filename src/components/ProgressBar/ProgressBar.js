/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px',
    '--padding': '0px 0px',
    '--border-radius': '4px'
  },
  medium: {
    '--height': '12px',
    '--padding': '0px 0px',
    '--border-radius': '4px'
  },
  large: {
    '--height': '24px',
    '--padding': '4px 4px',
    '--border-radius': '8px'
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper style={SIZES[size]} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <InnerBar progress={value}>
        <VisuallyHidden>{value}%</VisuallyHidden>
      </InnerBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 370px;
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--border-radius);
  
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const InnerBar = styled.div`
  --radius-near-end: ${p => p.progress > 99 ? (p.progress - 99) * 4 : 0}px;
  background-color: ${COLORS.primary};
  border-radius: 4px var(--radius-near-end) var(--radius-near-end) 4px;
  width: ${p => p.progress}%;
  height: 100%;
`;

export default ProgressBar;
