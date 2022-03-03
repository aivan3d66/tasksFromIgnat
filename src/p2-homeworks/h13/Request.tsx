import React, {ChangeEvent, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {axiosPostData} from "./api/request-api";

function Request() {
  const [checked, setChecked] = useState<boolean>(false);
  const [state, setState] = useState<string>('');

  const onCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    return setChecked(e.currentTarget.checked)
  }
  const onButtonClickHandler = () => {
    return axiosPostData.postRequest(checked)
      .then(res => setState(res.data))
      .catch(error => setState(error.response ? error.response.data.errorText : error.message))
  }

  return (
    <div>
      <div>
        <SuperButton onClick={onButtonClickHandler}>
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
      <div>
        {JSON.stringify(state)}
      </div>
    </div>
  );
}

export default Request;