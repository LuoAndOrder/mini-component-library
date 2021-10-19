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
    '--height': '16px',
    '--padding': '4px 4px',
    '--border-radius': '8px'
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper style={SIZES[size]} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <InnerBarWrapper>
        <InnerBar progress={value}>
          <VisuallyHidden>{value}%</VisuallyHidden>
        </InnerBar>
      </InnerBarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  
  padding: var(--padding);
  border-radius: var(--border-radius);
  
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const InnerBarWrapper = styled.div`
  border-radius: 4px;

  /* Round off corners when progress bar is near-full */
  overflow: hidden;
`;

const InnerBar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
  width: ${p => p.progress}%;
  height: var(--height);
`;

export default ProgressBar;
