import { useCallback, useEffect, useRef } from 'react';

const useClickOutside = (callback:any) => {
  const currentRef = useRef<HTMLDivElement>(null);

  const checkParent = (t:any, elm:any) => {
    while (t.parentNode) {
      if (t === elm) {
        return true;
      }
      t = t.parentNode;
    }
    return false;
  };

  const check = useCallback(
    (e:any) => {
      const target = (e && e.target) || (e && e.srcElement);

      if (!checkParent(target, currentRef.current)) {
        callback();
      }
    },
    [callback],
  );

  useEffect(() => {
    document.addEventListener('click', check, true);

    return () => {
      document.removeEventListener('click', check, true);
    };
  }, [check]);

  return currentRef;
};

export default useClickOutside;