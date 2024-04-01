export { settingsActions, settingsReducer } from './model/slice/settingsSlice';
export { SettingsPanel } from './ui/SettingsPanel';
export type { SettingsState, DieOption, Player } from './model/types/settings';
export { getNumbOfPlayers } from './model/selectors/getNumbOfPlayers/getNumbOfPlayers';
export { getDieOption } from './model/selectors/getDieOption/getDieOption';
export { getPlayers } from './model/selectors/getPlayers/getPlayers';
export { getStarted } from './model/selectors/getStarted/getStarted';
export { getIsCellModalOpen } from './model/selectors/getIsCellModalOpen/getIsCellModalOpen';
export { getDisabledBtn } from './model/selectors/getDisabledBtn/getDisabledBtn';
