import { memo } from 'react';
import type { Player } from 'src/5entities/SettingsPanel';
import cls from './Square.module.scss';

interface SquareProps {
  order?: number;
  mission: string;
  bgImage?: string;
  players?: Player[];
  className: string;
}
export const Square = memo((props: SquareProps) => {
  const { order, mission, bgImage, players, className } = props;

  return (
    <div className={`${cls.square} ${cls[className]}`}>
      {order !== 31 && (
        <div className={cls.mission}>
          <span>{`${order === 0 ? '' : order + '.'} ${mission}`}</span>
        </div>
      )}
      <img
        className={order !== 31 ? cls.picture : cls.final}
        src={bgImage}
        alt='picture'
      />
      {players?.map((el, i) => (
        <div
          className={`${cls.piece} ${cls['piecePosition' + i]}`}
          style={{ background: el.color }}
          key={i}
        >
          {el.name.slice(0, 1)}
        </div>
      ))}
    </div>
  );
});
