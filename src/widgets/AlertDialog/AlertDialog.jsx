import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import "./AlertDialog.css";

export default function AlertDialog({ open, handleClose, handleAction }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          textAlign: "center",
          fontFamily: "ActayWide, sans-serif",
          fontSize: "48px",
        }}
      >
        Удалить форму?
      </DialogTitle>
      <DialogActions
        sx={{ display: "flex", justifyContent: "center", gap: "20px" }}
      >
        <Button
          onClick={() => {
            handleClose();
            handleAction();
          }}
          variant="contained"
          color="error"
          autoFocus
          sx={{
            borderRadius: "48px",
            fontFamily: "ActayWide, sans-serif",
            padding: "20px 100px",
            fontSize: "18px",
          }}
        >
          Удалить
        </Button>
        <Button
          onClick={handleClose}
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "48px",
            fontFamily: "ActayWide, sans-serif",
            padding: "20px 100px",
            fontSize: "18px",
          }}
        >
          Отмена
        </Button>
      </DialogActions>
    </Dialog>
  );
}
