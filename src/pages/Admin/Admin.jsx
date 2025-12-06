import React, { useState, useEffect } from "react";
import { FormsTable } from "@widgets";
import { Button, Box } from "@mui/material";

function Admin(props) {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    props
      .getForms()
      .then((forms) => setForms(forms.data))
      .catch((err) => console.log(err));
  }, [props]);

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Button
        variant="contained"
        onClick={props.onLogout}
        sx={{
          backgroundColor: "black",
          borderRadius: "48px",
          alignSelf: "end",
          fontFamily: "ActayWide, sans-serif"
        }}
      >
        ВЫЙТИ
      </Button>
      <FormsTable
        forms={forms}
        onLogout={props.onLogout}
        setForms={setForms}
        addForm={props.addForm}
        updateForm={props.updateForm}
        deleteForm={props.deleteForm}
      />
    </Box>
  );
}

export default Admin;
