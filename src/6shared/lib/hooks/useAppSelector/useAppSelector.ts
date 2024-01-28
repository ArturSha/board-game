import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'src/1app/providers/storeProvider/config/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
