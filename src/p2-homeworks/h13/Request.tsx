import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";

function Request() {
  return (
    <div>
      <div>
        <SuperButton>
          click for request
        </SuperButton>
      </div>
      <div>
        <SuperCheckbox>
          check
        </SuperCheckbox>
      </div>
    </div>
  );
}

export default Request;