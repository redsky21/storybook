import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import cn from 'classnames';

export type TElementGroupProps = {
  direction?: 'row' | 'column'; // 방향
  isAlignedRight?: boolean; // 우측 정렬
  fullWidth?: boolean;
  gap?: number | string; // 자식 요소간 간격
  children?: React.ReactNode;
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  flexWrap?: React.CSSProperties['flexWrap'];
} & React.HTMLAttributes<HTMLDivElement>;

const StyledElementGroup = styled.div<TElementGroupProps>`
  display: flex;
  align-items: flex-start;
  ${({
    direction = 'row',
    gap = '1rem',
    isAlignedRight = false,
    alignItems = 'flex-start',
    justifyContent = 'flex-start',
    flexWrap = 'nowrap',
    fullWidth = false,
  }) => {
    const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
    return css({
      width: fullWidth ? '100%' : 'auto',
      flexDirection: direction,
      flexWrap,
      alignItems,
      justifyContent: isAlignedRight ? 'flex-end' : justifyContent,
      '& > * + *': {
        [marginType]: `${typeof gap === 'number' ? `${gap}px` : gap} !important`,
      },
    });
  }}
`;

const ElementGroup = React.forwardRef<HTMLDivElement, TElementGroupProps>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <StyledElementGroup
      className={cn('cnsui-elementgroup', className)}
      ref={ref}
      {...rest}
    ></StyledElementGroup>
  );
});

export default ElementGroup;
