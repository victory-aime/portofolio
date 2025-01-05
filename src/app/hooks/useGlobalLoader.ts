import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BVGCommonModule } from '_store/src/modules';

type UseShowLoaderProps = {
  onShowLoader?: () => void;
  onHideLoader?: () => void;
  onError?: (error: Error) => void;
};

const useShowLoader = (props: UseShowLoaderProps) => {
  const dispatch = useDispatch();
  const showLoader = useSelector(BVGCommonModule.selectors.getLoaderSelector);

  const showGlobalLoader = useCallback(() => {
    try {
      props?.onShowLoader?.();
      dispatch(BVGCommonModule.actions.showLoaderAction());
    } catch (error) {
      if (error instanceof Error) {
        props?.onError?.(error);
      }
    }
  }, [dispatch, props]);

  const hideGlobalLoader = useCallback(() => {
    try {
      props?.onHideLoader?.();
      dispatch(BVGCommonModule.actions.hideLoaderAction());
    } catch (error) {
      if (error instanceof Error) {
        props?.onError?.(error);
      }
    }
  }, [dispatch, props]);

  useEffect(() => {
    try {
      if (showLoader) {
        showGlobalLoader();
      } else {
        hideGlobalLoader();
      }
    } catch (error) {
      if (error instanceof Error) {
        props?.onError?.(error);
      }
    }
  }, [showLoader, showGlobalLoader, hideGlobalLoader, props]);

  return { showGlobalLoader, hideGlobalLoader };
};

export default useShowLoader;
