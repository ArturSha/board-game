import { memo, useCallback, useState } from 'react';
import { Button } from 'src/6shared/ui/Button';
import { Modal } from 'src/6shared/ui/Modal/ui/Modal';
import { Input } from 'src/6shared/ui/Input';
import { colors } from 'src/6shared/const';
import { useAppSelector } from 'src/6shared/lib/hooks/useAppSelector/useAppSelector';
import { useAppDispatch } from 'src/6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getDieOption } from '../model/selectors/getDieOption/getDieOption';
import {
  type DieOption,
  type Player,
  getNumbOfPlayers,
  settingsActions,
} from '..';
import { getStarted } from '../model/selectors/getStarted/getStarted';
import cls from './SettingsPanel.module.scss';

export const SettingsPanel = memo(() => {
  const [active, setActive] = useState<boolean>(false);
  const [playersName, setPlayersName] = useState<Player[]>([
    {
      name: '',
      color: 'red',
      position: 0,
      cups: 0,
      isActive: false,
      id: 0,
      skipRound: false,
      quit: false,
    },
  ]);
  const numberOfPlayers = useAppSelector(getNumbOfPlayers);
  const dieOption = useAppSelector(getDieOption);
  const gameStarted = useAppSelector(getStarted);

  const dispatch = useAppDispatch();

  const handlePlayersName = useCallback((value: string, i: string) => {
    setPlayersName((playersName) => {
      const index = +i;
      const updatedPlayersName = [...playersName];
      for (let j = updatedPlayersName.length; j < index; j++) {
        updatedPlayersName.push({
          name: '',
          color: colors[j],
          position: 0,
          cups: 0,
          isActive: false,
          id: j - 1,
          skipRound: false,
          quit: false,
        });
      }
      updatedPlayersName[index - 1] = {
        ...updatedPlayersName[index - 1],
        name: value,
        color: colors[index - 1],
        position: 0,
        cups: 0,
        isActive: false,
        id: index - 1,
        skipRound: false,
        quit: false,
      };
      return updatedPlayersName;
    });
  }, []);

  const handleStartBtn = () => {
    dispatch(settingsActions.setPlayers(playersName));
    setActive(false);
  };

  const handleSetNumberOfPlayers = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = Number(e.target.value);
      if (newValue > 16) {
        newValue = 16;
      }
      setPlayersName((prev) => [...prev].slice(0, newValue));
      dispatch(settingsActions.setNumberOfPlayers(newValue.toString()));
    },
    [dispatch]
  );

  const handleOnBlur = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const isValid = Number(value) > 3;
      if (!isValid) {
        dispatch(settingsActions.setNumberOfPlayers('3'));
      }
    },
    [dispatch]
  );

  const handleOptionChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(settingsActions.setDieOption(event.target.value as DieOption));
    },
    [dispatch]
  );

  const handleModal = useCallback(() => {
    setActive((prev) => !prev);
  }, []);

  const handleGameReset = useCallback(() => {
    setActive((prev) => !prev);
    dispatch(settingsActions.setGameReset());
  }, [dispatch]);

  const players = Array.from({ length: Number(numberOfPlayers) }, (_, index) =>
    index > 8 ? `${index + 1}` : `${'0' + (index + 1)}`
  );

  const nameChecker = playersName.every((player: Player) => {
    return (
      player?.name.trim() !== '' &&
      playersName.length === +numberOfPlayers &&
      player !== undefined
    );
  });

  return (
    <>
      {!gameStarted ? (
        <Button onClick={handleModal} title='Задать начальные настройки'>
          <span>Новая игра</span>
        </Button>
      ) : (
        <Button onClick={handleGameReset} title='Прервать игру'>
          <span>Прервать игру</span>
        </Button>
      )}

      <Modal active={active} setActive={handleModal}>
        <>
          <label>
            Введите кол-во игроков
            <Input
              onChange={handleSetNumberOfPlayers}
              onBlur={handleOnBlur}
              value={numberOfPlayers}
              title='Максимум 16 игроков'
              max={16}
              min={3}
              step={1}
              type='number'
              placeholder='Кол-во игроков'
            />
          </label>
          <div className={cls.playersContainer}>
            <h2>Введите имена игроков</h2>
            {players.map((el: string) => (
              <label key={el} className={cls.playerLabel}>
                {el}.
                <Input
                  value={playersName[Number(el) - 1]?.name ?? ''}
                  onChange={(e) => handlePlayersName(e.target.value, el)}
                />
                <span
                  className={cls.colorSelection}
                  style={{ background: colors[Number(el) - 1] }}
                />
              </label>
            ))}
            <p>Выбери кубик:</p>
            <label title='В процессе разработки'>
              Виртуальный:
              <Input
                disabled={true}
                type='radio'
                value='virtual'
                checked={dieOption === 'virtual'}
                onChange={handleOptionChange}
              />
            </label>
            <label>
              Реальный:
              <Input
                type='radio'
                value='manual'
                checked={dieOption === 'manual'}
                onChange={handleOptionChange}
              />
            </label>
            <Button
              disabled={!nameChecker || playersName.length === 0}
              className='btnStart'
              onClick={handleStartBtn}
            >
              Начать игру
            </Button>
          </div>
        </>
      </Modal>
    </>
  );
});
