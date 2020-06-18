import React from 'react';

import { CustomTaskListComponentStyles } from './CustomTaskList.Styles';

// It is recommended to keep components stateless and use redux for managing states
const CustomTaskList = (props) => {
  if (!props.isOpen) {
    return null;
  }

  return (
    <CustomTaskListComponentStyles>
      Hey there, agent. Looks like you're about to have a great day at the dojo. <span role="img" aria-label="Keikogi">🥋</span>
      <i className="accented" onClick={props.dismissBar}>
        k, thanks!
      </i>
    </CustomTaskListComponentStyles>
  );
};

export default CustomTaskList;
