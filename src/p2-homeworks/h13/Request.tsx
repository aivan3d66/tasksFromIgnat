import { Button, Checkbox, Paper } from "@mui/material";
import React, {ChangeEvent, useState} from "react";
import {axiosPostData} from "./api/request-api";

function Request() {
  const [checked, setChecked] = useState<boolean>(false);
  const [state, setState] = useState<string>(' ... ');

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
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "0 0 30px 0"
      }}>
        <Button variant="contained" onClick={onButtonClickHandler}>create request</Button>
        <span>
          Success: <Checkbox
            size={'medium'}
            checked={checked}
            onChange={onCheckboxHandler}
          />
        </span>
      </div>
      <div>
        <Paper
          variant="outlined"
          square
          style={{
            minHeight: "100px",
            padding: "10px",
            textAlign: "center",
          }}

        >
          {JSON.stringify(state)}
        </Paper>
      </div>
    </div>
  );
}

export default Request;