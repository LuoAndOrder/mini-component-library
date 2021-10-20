import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <SelectWrapper value={value} onChange={onChange}>
        <GhostSelectWrapper value={value}>
          {children}
        </GhostSelectWrapper>

        <CustomSelectWrapper>
          <SelectedText>{displayedValue}</SelectedText>
          <IconWrapper>
            <Icon id="chevron-down" size={12} />
          </IconWrapper>
        </CustomSelectWrapper>
      </SelectWrapper>

    </>
  );
};

const GhostSelectWrapper = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;

  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const SelectWrapper = styled.div`
  position: relative;
  width: max-content;
  
`;

const CustomSelectWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  height: 43px;
  padding: 12px 16px;

  border-radius: 8px;

  ${GhostSelectWrapper}:focus + & {
    outline: 1px solid #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${GhostSelectWrapper}:hover + & {
    color: ${COLORS.black};
  }
`;

const SelectedText = styled.span`
  margin-right: 24px;
`;

const IconWrapper = styled.div`
  display: inline-block;
`;

export default Select;
