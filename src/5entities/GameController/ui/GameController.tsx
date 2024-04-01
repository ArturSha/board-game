import { useAppSelector } from 'src/6shared/lib/hooks/useAppSelector/useAppSelector';
import type { Player } from 'src/5entities/SettingsPanel';
import {
  getDieOption,
  getDisabledBtn,
  getPlayers,
  settingsActions,
} from 'src/5entities/SettingsPanel';
import { Input } from 'src/6shared/ui/Input';
import { Button } from 'src/6shared/ui/Button';
import { useCallback, useState } from 'react';
import type { ChangeEvent } from 'react';
import { useAppDispatch } from 'src/6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getRandomNumber } from 'src/6shared/lib/helpers/getRandomNumber';
import cls from './GameController.module.scss';

export const GameController = () => {
  const [dieValue, setDieValue] = useState<string>('');

  const dispatch = useAppDispatch();
  const dieType = useAppSelector(getDieOption);
  const isBtnDisabled = useAppSelector(getDisabledBtn);
  const activePlayer: Player[] = useAppSelector(getPlayers).filter(
    (player) => player.isActive === true
  );

  const handleOnClickBtn = useCallback(() => {
    const updatedPlayer = {
      ...activePlayer[0],
      position: activePlayer[0]?.position + +dieValue,
    };
    dispatch(settingsActions.setPosition([updatedPlayer]));
    setDieValue('');
  }, [activePlayer, dieValue, dispatch]);

  const handleOnClickAutoBtn = useCallback(() => {
    const autoDieValue = getRandomNumber();
    const updatedPlayer = {
      ...activePlayer[0],
      position: activePlayer[0]?.position + autoDieValue,
    };
    dispatch(settingsActions.setPosition([updatedPlayer]));
    setDieValue('');
  }, [activePlayer, dispatch]);

  const handleDieValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      if (Number(value) > 6) {
        setDieValue('6');
        activePlayer[0].position = value;
      } else {
        setDieValue(value.toString());
      }
    },
    [activePlayer]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleOnClickBtn();
  };

  return (
    <div className={cls.gameController}>
      <p>{activePlayer[0]?.name}: Твой ход</p>
      {dieType === 'manual' ? (
        <form onSubmit={handleSubmit}>
          <label>
            Введите значение от 1 до 6
            <Input
              value={dieValue}
              min={1}
              max={6}
              step={1}
              type='number'
              onChange={handleDieValueChange}
              title='Введите значение от 1 до 6'
            />
          </label>
          <Button
            onClick={handleOnClickBtn}
            disabled={+dieValue > 0 && dieValue ? false : true}
          >
            Ввод
          </Button>
        </form>
      ) : (
        <Button disabled={isBtnDisabled} onClick={handleOnClickAutoBtn}>
          Roll
        </Button>
      )}
    </div>
  );
};
