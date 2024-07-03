import AddOrder from "@modal/oredermodal";
import EditService from "@modal/editmodal";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import order from "../../service/order";
import { useEffect, useState } from "react";
import { Button, IconButton, InputBase, Typography } from "@mui/material";
import { GridSearchIcon } from "@mui/x-data-grid";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Index = () => {
  const [orderes, setOrderes] = useState([]);
  const [edit, setEdit] = useState({});
  const [open, setOpen] = useState(false);

  const getOrderes = async () => {
    try {
      const response = await order.get();
      setOrderes(response.data.orderes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrderes();
  }, []);

  const deleteItem = async (id) => {
    try {
      const response = await order.delete(id);
      if (response.status === 200) {
        setOrderes((prev) => prev.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editItem = (row) => {
    setEdit(row);
    setOpen(true);
  };

  const handleSave = (updatedItem) => {
    setOrderes((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  return (
    <>
      <EditService item={edit} open={open} handleClose={() => setOpen(false)} onSave={handleSave} />
      <div>
        <div className="py-3 flex justify-between items-center">
          <div className="w-96">
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Qidiruv"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <GridSearchIcon />
              </IconButton>
            </Paper>
          </div>
          <AddOrder />
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>T/R</StyledTableCell>
                <StyledTableCell >Full Name</StyledTableCell>
                <StyledTableCell align="center">Phone Number</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderes.map((row, index) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell>{index + 1}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.client_full_name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.client_phone_number}
                  </StyledTableCell>
                  
                  <StyledTableCell align="center">
                    <button className="mr-2" onClick={() => editItem(row)}>
                      <EditIcon color="warning" />
                    </button>
                    <button className="ml-2" onClick={() => deleteItem(row.id)}>
                      <DeleteIcon color="error" />
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Index;
