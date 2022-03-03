import React, {ChangeEvent, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";

function Request() {
  const [checked, setChecked] = useState<boolean>(false);
  const [state, setState] = useState<string>('');

  console.log(state)

  const onCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    return setChecked(e.currentTarget.checked)
  }

  return (
    <div>
      <div>
        <SuperButton>
          click for request
        </SuperButton>
      </div>
      <div>
        <SuperCheckbox
          checked={checked}
          onChange={onCheckboxHandler}
        >
          check
        </SuperCheckbox>
      </div>
    </div>
  );
}

export default Request;