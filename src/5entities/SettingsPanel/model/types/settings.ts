export type DieOption = 'virtual' | 'manual';

export interface SettingsState {
  numberOfPlayers: string;
  die: DieOption;
  players: Player[];
  started: boolean;
  isCellModalOpen: boolean;
  disabledBtn: boolean;
}

export interface Player {
  name: string;
  position: number;
  color: string;
  cups: number;
  shotsHaveToDrink: number;
  isActive: boolean;
  id: number;
  skipRound: boolean;
  quit: boolean;
}
