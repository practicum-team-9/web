import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Paper,
  Typography,
  IconButton,
  Box,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { TABLE_ROW_DATA, TABLE_DATA_TEMP } from "@/app/constants";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

function FormsTable({ form }) {
  const [isPending, setIsPending] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedRow, setEditedRow] = useState({});
  const [newRow, setNewRow] = useState("");

  const displayCellData = (cell) => {
    return cell[0].endsWith("Date") ? formatDate(cell[1]) : cell[1];
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditedRow(TABLE_DATA_TEMP[index]);
  };

  const isButtonDisabled = (row) => {
    return Object.values(row).filter((i) => i.length === 0).length > 0;
  };

  const handleSaveClick = (index) => {
    // dispatch(editTableRow({ index: index, row: editedRow }));
    setEditIndex(-1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRow({ ...editedRow, [name]: value });
  };

  const handleNewRowChange = (e) => {
    const { name, value } = e.target;
    setNewRow({ ...newRow, [name]: value });
  };

  const handleAddRow = () => {
    // dispatch(addTableRow(newRow));
    setNewRow(DEFAULT_FIELDS);
  };

  const handleDeleteRow = (id) => {
    // dispatch(deleteTableRow(id));
  };

  return (
    <Paper sx={{ padding: "30px", borderRadius: "46px" }}>
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
          {!form ? (
            <div>
              <p>Нет доступных форм</p>
            </div>
          ) : (
            <TableBody>
              {TABLE_DATA_TEMP.length > 0 ? (
                TABLE_DATA_TEMP.map((row, rowIndex) => {
                  const cells = Object.entries(row);
                  return (
                    <TableRow key={rowIndex}>
                      {cells.map((cell, cellIndex) => (
                        <TableCell
                          key={cellIndex}
                          sx={{
                            fontSize: "14px",
                            maxWidth: "50px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {editIndex === rowIndex ? (
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
                            displayCellData(cell)
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
                            onClick={() => handleSaveClick(rowIndex)}
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
                    <div> No data yet.</div>
                  </TableCell>
                </TableRow>
              )}
              <TableRow>
                {TABLE_ROW_DATA.map((cell, index) => {
                  return (
                    <TableCell
                      key={index}
                      sx={{ fontSize: "14px", maxWidth: "50px" }}
                    >
                      <TextField
                        type={cell.type}
                        variant="standard"
                        name={cell.name}
                        value={newRow[cell.name] ?? ""}
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
                <TableCell sx={{ fontSize: "14px", maxWidth: "50px" }}>
                  <Button
                    variant="contained"
                    onClick={handleAddRow}
                    disabled={isButtonDisabled(newRow)}
                    sx={{ backgroundColor: "black" }}
                  >
                    Add
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default FormsTable;
