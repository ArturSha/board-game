import { memo, useCallback, useState } from 'react';
import type { Player } from 'src/5entities/SettingsPanel';
import { getPlayers, settingsActions } from 'src/5entities/SettingsPanel';
import { cellRules } from 'src/6shared/const';
import { useAppDispatch } from 'src/6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'src/6shared/lib/hooks/useAppSelector/useAppSelector';
import { Modal } from 'src/6shared/ui/Modal/ui/Modal';
import { Button } from 'src/6shared/ui/Button';
import cls from './CellModal.module.scss';
import { Checkbox } from 'src/6shared/ui/Checkbox/Checkbox';

interface CellModal1Props {
  isCellModalOpen: boolean;
}

export const CheckboxCellModal = memo(
  ({ isCellModalOpen }: CellModal1Props) => {
    const [playersId, setPlayersId] = useState<Array<number>>([]);

    const dispatch = useAppDispatch();

    const players = useAppSelector(getPlayers);

    const activePlayerIndex = players.findIndex(
      (player) => player.isActive === true
    );
    const currentActivePlayerPosition = players[activePlayerIndex]?.position;
    const minSelected =
      cellRules[currentActivePlayerPosition]?.minSelected ?? 1;
    const maxSelected =
      cellRules[currentActivePlayerPosition]?.maxSelected ?? 16;

    const handleCheckboxChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const isChecked = event.target.checked;
      const value = +event.target.value;

      if (isChecked) {
        setPlayersId((prev) => [...prev, value]);
      } else if (!isChecked) {
        setPlayersId((prev) => prev.filter((id) => id !== value));
      }
    };

    const handleCloseModal = useCallback(() => {
      const cellRule = cellRules[currentActivePlayerPosition];
      if (cellRule && cellRule.cellFn) {
        dispatch(
          settingsActions.setUpdatedPlayers(cellRule.cellFn(players, playersId))
        );
        setPlayersId([]);
      }

      dispatch(settingsActions.setActivePlayer());
      dispatch(settingsActions.closeCellModal());
    }, [currentActivePlayerPosition, dispatch, players, playersId]);

    return isCellModalOpen ? (
      <Modal active={isCellModalOpen}>
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
            <Checkbox
              selectedPlayers={playersId}
              key={index}
              name={player.name}
              onChange={handleCheckboxChange}
              value={player.id}
            />
          ))}
          <Button
            onClick={handleCloseModal}
            disabled={
              playersId.length < minSelected || playersId.length > maxSelected
            }
          >
            Next
          </Button>
        </div>
      </Modal>
    ) : null;
  }
);
