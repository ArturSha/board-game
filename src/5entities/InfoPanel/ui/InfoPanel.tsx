import { memo } from 'react';
import type { Player } from 'src/5entities/SettingsPanel';
import { getPlayers } from 'src/5entities/SettingsPanel';
import { useAppSelector } from 'src/6shared/lib/hooks/useAppSelector/useAppSelector';
import cls from './InfoPanel.module.scss';

export const InfoPanel = memo(() => {
  const players: Player[] = useAppSelector(getPlayers);
  const sortedPlayers = [...players].sort(
    (first, second) => second?.shotsHaveToDrink - first?.shotsHaveToDrink
  );

  return (
    <div className={cls.container}>
      <ul>
        {sortedPlayers.map((player: Player) => (
          <li key={player.id}>
            {player.name}: уже выпито {player.cups - player.shotsHaveToDrink}{' '}
            {player.shotsHaveToDrink > 0
              ? `должен выпить ${player.shotsHaveToDrink}`
              : ''}
          </li>
        ))}
      </ul>
    </div>
  );
});
