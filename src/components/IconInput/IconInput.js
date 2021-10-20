import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const WRAPPER_STYLES = {
  small: {
    '--height': '24px',
    '--border-size': '1px',
    '--padding': '4px',
    
  },
  large: {
    '--height': '36px',
    '--border-size': '2px',
    '--padding': '8px',
  }
};

const INPUT_STYLES = {
  small: {
    '--font-size': (14 / 16) + 'rem',
    '--line-height': '16px',
    '--padding-left': '24px',
  },
  large: {
    '--font-size': (18 / 16) + 'rem',
    '--line-height': '21px',
    '--padding-left': '36px',
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  let iconSize;
  if (size === 'small') {
    iconSize = 16;
  } else if (size === 'large') {
    iconSize = 24;
  } else {
    throw new Error(`Invalid size: ${size}`);
  }

  return (
    <Wrapper style={{ ...WRAPPER_STYLES[size], '--width': width + 'px' }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <TextInput type="text" placeholder={placeholder} style={{ ...INPUT_STYLES[size] }} />
      <IconWrapper style={{ '--icon-size': iconSize + 'px' }}>
        <Icon id={icon} size={iconSize} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
  height: var(--height);
  border-bottom: var(--border-size) solid ${COLORS.black};
  padding: var(--padding);

  &:focus-within {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const TextInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  padding-left: var(--padding-left);

  font-size: var(--font-size);
  line-height: var(--line-height);
  color: ${COLORS.gray700};
  font-weight: 700;

  &:focus {
    outline: none;
  }

  &:placeholder-shown {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: var(--icon-size);
  height: var(--icon-size);
  margin: auto;
  pointer-events: none;

  color: ${COLORS.gray700};

  ${TextInput}:placeholder-shown + & {
    color: ${COLORS.gray500};
  }

  ${TextInput}:hover + & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
