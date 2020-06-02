import React from 'react';
import styled from 'styled-components';
import Square from './Square';

const StyledBoard = styled.div``;
const StyledStatus = styled.div`
  margin-bottom: 10px;
`;
const BoardRow = styled.div`
  :after {
    clear: both;
    content: '';
    display: table;
  }
`;

export default function Board() {
  const status = 'Next player: X';

  function renderSquare(i: number) {
    return <Square />;
  }

  return (
    <StyledBoard>
      <StyledStatus>{status}</StyledStatus>

      <BoardRow>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </BoardRow>
      <BoardRow>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </BoardRow>
      <BoardRow>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </BoardRow>
    </StyledBoard>
  );
}
