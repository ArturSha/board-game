import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/1app/providers/storeProvider/config/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
