import { memo } from 'react';
import { GameBoard } from 'src/3widgets/GameBoard';
import { ControlPanel } from 'src/3widgets/ControlPanel';
import cls from './MainPage.module.scss';

export const MainPage = memo(() => {
  return (
    <div className={cls.MainPage}>
      <GameBoard />
      <ControlPanel />
    </div>
  );
});
