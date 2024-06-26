
import React, { useEffect } from 'react';
import messageFunctionBlocked from './messages/MessageAlertFunctionBlocked';

const BlockRightClickAndKeys = ({ children }) => {
  useEffect(() => {
    const blockContextMenu = (event) => {
      event.preventDefault();
      messageFunctionBlocked();
    };

    const blockKeys = (event) => {
      if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
        event.preventDefault();
        messageFunctionBlocked();

      }
    };

    document.addEventListener('contextmenu', blockContextMenu);
    document.addEventListener('keydown', blockKeys);

    return () => {
      document.removeEventListener('contextmenu', blockContextMenu);
      document.removeEventListener('keydown', blockKeys);
    };
  }, []);

  return <>{children}</>;
};

export default BlockRightClickAndKeys;
