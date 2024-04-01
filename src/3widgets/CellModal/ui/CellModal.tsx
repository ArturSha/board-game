import { memo } from 'react';
import {
  getDieOption,
  getIsCellModalOpen,
  getPlayers,
} from 'src/5entities/SettingsPanel';
import {
  CheckboxAutoCellModal,
  CheckboxCellModal,
  InputCellModal,
  RadioCellModal,
  SimpleCellModal,
  TwoOptionsCellModal,
} from 'src/5entities/CellModals';
import { useAppSelector } from 'src/6shared/lib/hooks/useAppSelector/useAppSelector';

export const CellModal = memo(() => {
  const isCellModalOpen = useAppSelector(getIsCellModalOpen);
  const players = useAppSelector(getPlayers);
  const dieType = useAppSelector(getDieOption);
  const activePlayerIndex = players.findIndex(
    (player) => player.isActive === true
  );
  const currentActivePlayerPosition = players[activePlayerIndex]?.position;

  switch (currentActivePlayerPosition) {
    case 1:
      return <SimpleCellModal isCellModalOpen={isCellModalOpen} />;
    case 2:
      return <RadioCellModal isCellModalOpen={isCellModalOpen} />;
    case 3:
      return <SimpleCellModal isCellModalOpen={isCellModalOpen} />;
    case 4:
      return <RadioCellModal isCellModalOpen={isCellModalOpen} />;
    case 5:
      return <CheckboxCellModal isCellModalOpen={isCellModalOpen} />;
    case 6:
      return <SimpleCellModal isCellModalOpen={isCellModalOpen} />;
    case 7:
      return <SimpleCellModal isCellModalOpen={isCellModalOpen} />;
    case 8:
      return <SimpleCellModal isCellModalOpen={isCellModalOpen} />;
    case 9:
      return <SimpleCellModal isCellModalOpen={isCellModalOpen} />;
    case 10:
      return <RadioCellModal isCellModalOpen={isCellModalOpen} />;
    case 11:
      return <CheckboxCellModal isCellModalOpen={isCellModalOpen} />;
    case 12:
      return <SimpleCellModal isCellModalOpen={isCellModalOpen} />;
    case 13:
      return <CheckboxCellModal isCellModalOpen={isCellModalOpen} />;
    case 14:
      return <TwoOptionsCellModal isCellModalOpen={isCellModalOpen} />;
    case 15:
      return <InputCellModal isCellModalOpen={isCellModalOpen} />;
    case 16:
      return <CheckboxCellModal isCellModalOpen={isCellModalOpen} />;
    case 17:
      return <SimpleCellModal isCellModalOpen={isCellModalOpen} />;
    case 18:
      return <CheckboxCellModal isCellModalOpen={isCellModalOpen} />;
    case 19:
      return <CheckboxCellModal isCellModalOpen={isCellModalOpen} />;
    case 20:
      return <RadioCellModal isCellModalOpen={isCellModalOpen} />;
    case 21:
      return <SimpleCellModal isCellModalOpen={isCellModalOpen} />;
    case 22:
      return dieType === 'manual' ? (
        <CheckboxCellModal isCellModalOpen={isCellModalOpen} />
      ) : (
        <CheckboxAutoCellModal isCellModalOpen={isCellModalOpen} />
      );
    case 23:
      return <SimpleCellModal isCellModalOpen={isCellModalOpen} />;
    case 24:
      return <TwoOptionsCellModal isCellModalOpen={isCellModalOpen} />;
    case 25:
      return <InputCellModal isCellModalOpen={isCellModalOpen} />;
    case 26:
      return <TwoOptionsCellModal isCellModalOpen={isCellModalOpen} />;
    case 27:
      return <SimpleCellModal isCellModalOpen={isCellModalOpen} />;
    case 28:
      return <RadioCellModal isCellModalOpen={isCellModalOpen} />;
    case 29:
      return <SimpleCellModal isCellModalOpen={isCellModalOpen} />;
    case 30:
      return <SimpleCellModal isCellModalOpen={isCellModalOpen} />;
    default:
      null;
      break;
  }
});
