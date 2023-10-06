import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products/productsActions";
import { changePage } from "../../store/products/productsSlice";

export default function PaginationControlled() {
  const { currentPage, totalPages } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    dispatch(changePage({ page: value }));
    dispatch(getProducts());
  };

  return (
    <Stack
      className="pagination"
      sx={{ margin: "20px", borderRadius: "20px" }}
      spacing={2}
    >
      <Pagination
        className="paginationBody"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "5px",
          borderRadius: "20px",
        }}
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
      />
    </Stack>
  );
}
