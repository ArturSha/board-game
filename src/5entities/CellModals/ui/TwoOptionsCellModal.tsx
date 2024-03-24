import { memo, useCallback } from 'react';
import { getPlayers, settingsActions } from 'src/5entities/SettingsPanel';
import { cellRules } from 'src/6shared/const';
import { useAppDispatch } from 'src/6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'src/6shared/lib/hooks/useAppSelector/useAppSelector';
import { Modal } from 'src/6shared/ui/Modal/ui/Modal';
import { Button } from 'src/6shared/ui/Button';
import cls from './CellModal.module.scss';

interface CellModal1Props {
  isCellModalOpen: boolean;
}

export const TwoOptionsCellModal = memo(
  ({ isCellModalOpen }: CellModal1Props) => {
    const dispatch = useAppDispatch();

    const players = useAppSelector(getPlayers);

    const activePlayerIndex = players.findIndex(
      (player) => player.isActive === true
    );

    const currentActivePlayerPosition = players?.[activePlayerIndex]?.position;

    const handleCloseModal = useCallback(
      (value: number) => {
        const cellRule = cellRules[currentActivePlayerPosition];
        if (cellRule && cellRule.cellFn) {
          dispatch(
            settingsActions.setUpdatedPlayers(cellRule.cellFn(players, value))
          );
        }

        dispatch(settingsActions.setActivePlayer());
        dispatch(settingsActions.closeCellModal());
      },
      [currentActivePlayerPosition, players, dispatch]
    );

    return isCellModalOpen ? (
      <Modal active={isCellModalOpen} withCloseBtn={false}>
        <div className={cls.container}>
          <h2
            className={cls.header}
            dangerouslySetInnerHTML={{
              __html: cellRules[currentActivePlayerPosition].rule,
            }}
          ></h2>
          <img
            className={cls.image}
            src={cellRules[currentActivePlayerPosition].img}
            alt=''
          />
          <Button onClick={() => handleCloseModal(1)}>
            {cellRules?.[currentActivePlayerPosition]?.optionOne}
          </Button>
          <Button onClick={() => handleCloseModal(2)}>
            {cellRules?.[currentActivePlayerPosition]?.optionTwo}
          </Button>
        </div>
      </Modal>
    ) : null;
  }
);
