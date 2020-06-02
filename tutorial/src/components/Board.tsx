import React from 'react';
import styled from 'styled-components';

import { calculateWinner } from 'utils';
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
  const [status, setStatus] = React.useState<string>('Next Player: X');
  const [isWinner, setIsWinner] = React.useState<Boolean>(false);
  const [board, setBoard] = React.useState<(string | null)[]>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [xIsNext, setXisNext] = React.useState<Boolean>(true);

  React.useEffect(() => {
    const winner = calculateWinner(board);
    if (winner) {
      setIsWinner(true);
    }
  }, [board]);

  React.useEffect(() => {
    if (isWinner) {
      setStatus('Winner ' + (!xIsNext ? 'X' : 'O'));
    } else {
      setStatus('Next Player: ' + (xIsNext ? 'X' : 'O'));
    }
  }, [xIsNext, isWinner]);

  function handleClick(i: any) {
    const squares = board.slice();
    if (!isWinner && squares[i] === null) {
      squares[i] = xIsNext ? 'X' : 'O';
      setBoard(squares);
      setXisNext(!xIsNext);
    }
  }

  function renderSquare(i: number) {
    return (
      <Square
        value={board[i]}
        onClick={() => {
          handleClick(i);
        }}
      />
    );
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
