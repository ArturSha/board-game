import { memo, useCallback } from 'react';
import { settingsActions } from 'src/5entities/SettingsPanel';
import { getIsCellModalOpen } from 'src/5entities/SettingsPanel/model/selectors/getIsCellModalOpen/getIsCellModalOpen';
import { useAppDispatch } from 'src/6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'src/6shared/lib/hooks/useAppSelector/useAppSelector';
import { Button } from 'src/6shared/ui/Button';
import { Modal } from 'src/6shared/ui/Modal/ui/Modal';

export const CellModal = memo(() => {
  const isCellModalOpen = useAppSelector(getIsCellModalOpen);
  const dispatch = useAppDispatch();
  const handleCloseModal = useCallback(
    () => dispatch(settingsActions.closeCellModal()),
    [dispatch]
  );

  return isCellModalOpen ? (
    <Modal active={isCellModalOpen}>
      <div style={{ background: 'red' }}>
        test test cellmodaltest test cellmodaltest test cellmodaltest test
        cellmodaltest test cellmodaltest test cellmodaltest test cellmodaltest
        test cellmodaltest test cellmodal
      </div>
      <Button onClick={handleCloseModal}>Next</Button>
    </Modal>
  ) : null;
});
