import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [text, setText] = useState([]);

  function toggle(e) {
    setIsShowing(!isShowing);
    if (isShowing === false) {
    	setText(e.target.closest('[id]').getAttribute('data-text'));
    }
  }

  return {
    isShowing,
    toggle,
    text
  }
};

export default useModal;