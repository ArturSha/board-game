import { memo, useCallback, useState } from 'react';
import { getPlayers, settingsActions } from 'src/5entities/SettingsPanel';
import { cellRules } from 'src/6shared/const';
import { useAppDispatch } from 'src/6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'src/6shared/lib/hooks/useAppSelector/useAppSelector';
import { Modal } from 'src/6shared/ui/Modal/ui/Modal';
import { Button } from 'src/6shared/ui/Button';
import { getRandomNumber } from 'src/6shared/lib/helpers/getRandomNumber';
import cls from './CellModal.module.scss';

interface CellModal1Props {
  isCellModalOpen: boolean;
}

export const CheckboxAutoCellModal = memo(
  ({ isCellModalOpen }: CellModal1Props) => {
    const [playersId, setPlayersId] = useState<Array<number>>([]);
    const [playersDieValue, setPlayersDieValue] = useState<Array<number>>([]);

    const dispatch = useAppDispatch();

    const players = useAppSelector(getPlayers);

    const activePlayerIndex = players.findIndex(
      (player) => player.isActive === true
    );
    const currentActivePlayerPosition = players[activePlayerIndex]?.position;

    const getDieNumbers = () => {
      const newPlayersId = [...playersId];
      const newPlayersDieValue = [...playersDieValue];
      for (let i = 0; i < players.length; i++) {
        const dieValue = getRandomNumber();
        newPlayersDieValue.push(dieValue);
        if (dieValue === 6) {
          newPlayersId.push(i);
        }
      }
      setPlayersId(newPlayersId);
      setPlayersDieValue(newPlayersDieValue);
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
      setPlayersId([]);
      setPlayersDieValue([]);
    }, [currentActivePlayerPosition, dispatch, players, playersId]);

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
          {players.map((player, index) => {
            return (
              <p key={player.id}>
                {player.name}: <span>{playersDieValue?.[index]}</span>
              </p>
            );
          })}
          <Button
            onClick={getDieNumbers}
            disabled={playersDieValue.length !== 0}
          >
            Roll
          </Button>

          <Button
            onClick={handleCloseModal}
            disabled={playersDieValue.length === 0}
          >
            Next
          </Button>
        </div>
      </Modal>
    ) : null;
  }
);
