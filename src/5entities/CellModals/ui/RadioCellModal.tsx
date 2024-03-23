import type { Player } from 'src/5entities/SettingsPanel';
import { memo, useCallback, useState } from 'react';
import { getPlayers, settingsActions } from 'src/5entities/SettingsPanel';
import { cellRules } from 'src/6shared/const';
import { useAppDispatch } from 'src/6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'src/6shared/lib/hooks/useAppSelector/useAppSelector';
import { Modal } from 'src/6shared/ui/Modal/ui/Modal';
import { Button } from 'src/6shared/ui/Button';
import { Input } from 'src/6shared/ui/Input';
import cls from './CellModal.module.scss';

interface CellModal1Props {
  isCellModalOpen: boolean;
}

export const RadioCellModal = memo(({ isCellModalOpen }: CellModal1Props) => {
  const [playerId, setPlayerId] = useState<number>(0);

  const dispatch = useAppDispatch();

  const players = useAppSelector(getPlayers);

  const activePlayerIndex = players.findIndex(
    (player) => player.isActive === true
  );

  const currentActivePlayerPosition = players[activePlayerIndex]?.position;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = +event.target.value;

    setPlayerId(value);
  };

  const handleCloseModal = useCallback(() => {
    const cellRule = cellRules[currentActivePlayerPosition];
    if (cellRule && cellRule.cellFn) {
      dispatch(
        settingsActions.setUpdatedPlayers(cellRule.cellFn(players, playerId))
      );
    }
    dispatch(settingsActions.setActivePlayer());
    dispatch(settingsActions.closeCellModal());
  }, [currentActivePlayerPosition, dispatch, players, playerId]);

  return isCellModalOpen ? (
    <Modal active={isCellModalOpen} withCloseBtn={false}>
      <div className={cls.container}>
        <h2 className={cls.header}>
          {cellRules[currentActivePlayerPosition].rule}
        </h2>
        <img
          className={cls.image}
          src={cellRules[currentActivePlayerPosition].img}
          alt=''
        />
        {players.map((player: Player, index) => (
          <label key={index}>
            {player.name}
            <Input
              type='radio'
              value={player.id}
              checked={playerId === player.id}
              onChange={handleInputChange}
            />
          </label>
        ))}
        <Button onClick={handleCloseModal}>Next</Button>
      </div>
    </Modal>
  ) : null;
});
