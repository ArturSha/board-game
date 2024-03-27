import { memo } from 'react';
import { Square } from 'src/6shared/ui/Square';
import { cellRules } from 'src/6shared/const';
import { useAppSelector } from 'src/6shared/lib/hooks/useAppSelector/useAppSelector';
import { getPlayers } from 'src/5entities/SettingsPanel/model/selectors/getPlayers/getPlayers';
import type { Player } from 'src/5entities/SettingsPanel';
import cls from './GameBoard.module.scss';

export const GameBoard = memo(() => {
  const currentPlayers: Player[] = useAppSelector(getPlayers);
  const checkPlayerPosition = (players: Player[], index: number) => {
    const result = [];
    for (let i = 0; i < players.length; i++) {
      const element = players[i]?.position === index;
      if (element) {
        result.push(players[i]);
      }
    }
    return result;
  };
  const renderSquares = () => {
    const squares = [];
    for (let i = 0; i < 32; i++) {
      const rule = cellRules[i]?.rule1 || '';
      const cellImg = cellRules[i]?.img || '';
      squares.push(
        <Square
          key={i}
          bgImage={cellImg}
          order={i}
          mission={rule}
          players={checkPlayerPosition(currentPlayers, i)}
          className={`square${i}`}
        />
      );
    }
    return squares;
  };

  return <div className={cls.gameBoard}>{renderSquares()}</div>;
});
