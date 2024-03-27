import { SettingsPanel } from 'src/5entities/SettingsPanel';
import cls from './ControlPanel.module.scss';
import { useAppSelector } from 'src/6shared/lib/hooks/useAppSelector/useAppSelector';
import { getStarted } from 'src/5entities/SettingsPanel/model/selectors/getStarted/getStarted';
import { GameController } from 'src/5entities/GameController';
import { InfoPanel } from 'src/5entities/InfoPanel';

export const ControlPanel = () => {
  const isGameStarted = useAppSelector(getStarted);
  return (
    <div className={cls.controlPanel}>
      <SettingsPanel />
      {isGameStarted ? (
        <>
          <InfoPanel />
          <GameController />
        </>
      ) : null}
    </div>
  );
};
