import { memo } from 'react';
import { cellRules } from 'src/6shared/const/rules';
import { Square } from 'src/6shared/ui/Square';
import cls from './GameBoard.module.scss';

export const GameBoard = memo(() => {
  const renderSquares = () => {
    const squares = [];
    for (let i = 0; i < 32; i++) {
      const rule = cellRules[i]?.rule || '';
      const cellImg = cellRules[i]?.img || '';
      squares.push(
        <Square
          key={i}
          bgImage={cellImg}
          order={i}
          mission={rule}
          players={[]}
          className={`square${i}`}
        />
      );
    }
    return squares;
  };

  return <div className={cls.gameBoard}>{renderSquares()}</div>;
});
