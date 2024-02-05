import { memo } from 'react';
import { GameBoard } from 'src/3widgets/GameBoard';
import { SettingsPanel } from 'src/5entities/SettingsPanel';
import cls from './MainPage.module.scss';

export const MainPage = memo(() => {
  return (
    <div className={cls.MainPage}>
      <GameBoard />
      <SettingsPanel />
    </div>
  );
});
