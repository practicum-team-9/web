import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Typography,
  IconButton,
  Box,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { TABLE_ROW_DATA } from "@/app/constants";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import "./FormsTable.css";

function FormsTable({ forms, setForms, addForm, deleteForm, updateForm }) {
  const [isPending, setIsPending] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedRow, setEditedRow] = useState({});
  const [newForm, setNewForm] = useState({ name: "", url: "" });

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditedRow(forms[index]);
  };

  const isButtonDisabled = (row) => {
    return Object.values(row).filter((i) => i.length === 0).length > 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRow({ ...editedRow, [name]: value });
  };

  const handleNewRowChange = (e) => {
    const { name, value } = e.target;
    setNewForm({ ...newForm, [name]: value });
  };

  // api calls
  const handleSaveClick = (index, id) => {
    setIsPending(true);
    updateForm(id, editedRow)
      .then((res) => {
        setIsPending(false);
        setForms((prev) => [...prev.map((i) => (i.id === id ? res.data : i))]);
      })
      .catch((err) => {
        console.log(err);
        setIsPending(false);
      });
    setEditIndex(-1);
  };

  const handleAddRow = () => {
    setIsPending(true);
    addForm(newForm)
      .then((res) => {
        setForms((prev) => [...prev, res.data]);
        setNewForm({ name: "", url: "" });
        setIsPending(false);
      })
      .catch((err) => {
        console.log(err);
        setIsPending(false);
      });
  };

  const handleDeleteRow = (id) => {
    setIsPending(true);
    deleteForm(id)
      .then((res) => {
        setForms(forms.filter((i) => i.id !== id));
        setIsPending(false);
      })
      .catch((err) => {
        console.log(err);
        setIsPending(false);
      });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        style={{ padding: "16px", textAlign: "center" }}
      >
        Формы
      </Typography>
      <TableContainer sx={{ position: "relative", borderRadius: "20px" }}>
        {isPending && (
          <Box
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              bottom: "0",
              width: "100%",
              zIndex: "5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        )}
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {TABLE_ROW_DATA.map((cell, index) => (
                <TableCell
                  key={index}
                  sx={{ backgroundColor: "#000000", color: "#FFFFFF" }}
                >
                  {cell.title}
                </TableCell>
              ))}
              <TableCell sx={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
                Действия
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {forms.length > 0 ? (
              forms.map((row, rowIndex) => {
                let arr = [];
                for (let index = 0; index < TABLE_ROW_DATA.length; index++) {
                  arr.push([
                    TABLE_ROW_DATA[index].name,
                    row[TABLE_ROW_DATA[index].name],
                  ]);
                }
                return (
                  <TableRow key={rowIndex}>
                    {arr.map((cell, cellIndex) => (
                      <TableCell
                        key={cellIndex}
                        sx={{
                          fontSize: "14px",
                          maxWidth: "50px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {[2, 3].every((element) => cellIndex !== element) &&
                        editIndex === rowIndex ? (
                          <TextField
                            type="text"
                            variant="standard"
                            sx={{
                              "& .MuiInputBase-input": {
                                fontSize: "14px",
                              },
                              width: "100%",
                            }}
                            name={cell[0]}
                            value={editedRow[cell[0]]}
                            onChange={handleChange}
                          />
                        ) : (
                          <div className="copy-button-container">
                            <p className="cell">{cell[1]} </p>
                            <IconButton
                              sx={{ width: "24px", height: "24px" }}
                              onClick={() => copyToClipboard(cell[1])}
                            >
                              <ContentCopyIcon />
                            </IconButton>
                          </div>
                        )}
                      </TableCell>
                    ))}

                    <TableCell
                      style={{
                        display: "flex",
                        gap: "5px",
                      }}
                    >
                      {editIndex === rowIndex ? (
                        <IconButton
                          aria-label="save"
                          onClick={() => handleSaveClick(editIndex, row.id)}
                          disabled={isButtonDisabled(editedRow)}
                        >
                          <CheckIcon />
                        </IconButton>
                      ) : (
                        <IconButton
                          aria-label="edit"
                          onClick={() => handleEditClick(rowIndex)}
                        >
                          <EditIcon />
                        </IconButton>
                      )}
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleDeleteRow(row.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow sx={{ width: "100%", textAlign: "center" }}>
                <TableCell
                  colSpan={9}
                  style={{ textAlign: "center", backgroundColor: "#f0f0f0" }}
                >
                  <div>
                    Формы не найдены. Чтобы добавить форму, нажмите "Добавить"
                  </div>
                </TableCell>
              </TableRow>
            )}
            <TableRow>
              {TABLE_ROW_DATA.slice(0, 2).map((cell, index) => {
                return (
                  <TableCell
                    key={index}
                    sx={{ fontSize: "14px", maxWidth: "50px" }}
                  >
                    <TextField
                      type={cell.type}
                      variant="standard"
                      name={cell.name}
                      value={newForm[cell.name] ?? ""}
                      onChange={handleNewRowChange}
                      sx={{
                        "& .MuiInputBase-input": {
                          fontSize: "14px",
                        },
                        width: "100%",
                      }}
                    />
                  </TableCell>
                );
              })}
              <TableCell sx={{ fontSize: "14px", maxWidth: "100px" }}>
                <Button
                  variant="contained"
                  onClick={handleAddRow}
                  disabled={isButtonDisabled(newForm)}
                  sx={{ backgroundColor: "black", borderRadius: "48px" }}
                >
                  Добавить
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default FormsTable;
