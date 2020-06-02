import React from 'react';
import styled from 'styled-components';
import Board from 'components/Board';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const BoardWrapper = styled.div``;
const GameInfo = styled.div`
  margin-left: 20px;
`;

export default function GamePage() {
  return (
    <Container>
      <BoardWrapper>
        <Board />
      </BoardWrapper>
      <GameInfo>
        <div>
          {
            // Status
          }
        </div>
        <ol>
          {
            // Todo
          }
        </ol>
      </GameInfo>
    </Container>
  );
}
