import type { ChangeEvent } from 'react';
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

export const InputCellModal = memo(({ isCellModalOpen }: CellModal1Props) => {
  const [dieValue, setDieValue] = useState<string>('');

  const dispatch = useAppDispatch();

  const players = useAppSelector(getPlayers);

  const activePlayerIndex = players.findIndex(
    (player) => player.isActive === true
  );

  const currentActivePlayerPosition = players[activePlayerIndex]?.position;

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (Number(value) > 6) {
      setDieValue('6');
    } else {
      setDieValue(value.toString());
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    const cellRule = cellRules[currentActivePlayerPosition];
    if (cellRule && cellRule.cellFn) {
      dispatch(
        settingsActions.setUpdatedPlayers(cellRule.cellFn(players, +dieValue))
      );
    }
    dispatch(settingsActions.setActivePlayer());
    dispatch(settingsActions.closeCellModal());
  }, [currentActivePlayerPosition, dispatch, players, dieValue]);

  return isCellModalOpen ? (
    <Modal active={isCellModalOpen} withCloseBtn={false}>
      <div className={cls.container}>
        <h2
          className={cls.header}
          dangerouslySetInnerHTML={{
            __html: cellRules[currentActivePlayerPosition].rule1,
          }}
        ></h2>
        <img
          className={cls.image}
          src={cellRules[currentActivePlayerPosition].img}
          alt=''
        />
        <Input
          value={dieValue}
          type='number'
          min={1}
          max={6}
          step={1}
          title='Введите значение от 1 до 6'
          onChange={handleInputChange}
        />
        <Button disabled={dieValue !== ''} onClick={handleCloseModal}>
          Next
        </Button>
      </div>
    </Modal>
  ) : null;
});
