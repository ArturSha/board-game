import { memo } from 'react';
import cls from './Square.module.scss';

interface SquareProps {
  order: number;
  mission: string;
  bgImage?: string;
  players?: number[];
  className: string;
}
export const Square = memo((props: SquareProps) => {
  const { order, mission, bgImage, className } = props;

  return (
    <div className={`${cls.square} ${cls[className]}`}>
      <div className={cls.mission}>
        <span>{`${order === 0 ? '' : order + '.'} ${mission}`}</span>
      </div>
      <img className={cls.picture} src={bgImage} alt='picture' />
    </div>
  );
});
