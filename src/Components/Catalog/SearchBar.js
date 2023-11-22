import { CloseOutlined, SearchSharp } from "@mui/icons-material";
import { Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { colors } from "../../metaData/colors.js";
import { Link } from "react-router-dom";
import { searchBar } from "./searchBar.css";
import {
  filteredDataStackStyles,
  mainStackStyles,
  secondaryStackStyles,
} from "./searchBarStyles.js";

export const SearchBar = ({ publications }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = publications.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <Stack sx={mainStackStyles}>
      <Stack sx={secondaryStackStyles}>
        <Stack>
          <Typography variant="h5" sx={{ textShadow: "12px 6px 12px" }}>
            Get some knowledge from...
          </Typography>
        </Stack>
        <Stack sx={mainStackStyles}>
          <Stack sx={secondaryStackStyles}>
            <TextField
              label="search"
              name="search"
              variant="standard"
              onChange={handleFilter}
              value={wordEntered}
              size="large"
              color="success"
              sx={{ mt: 2, width: "240px", height: "40px" }}
            >
              Search
            </TextField>
            <Stack>
              {filteredData.length === 0 ? (
                <SearchSharp></SearchSharp>
              ) : (
                <CloseOutlined onClick={clearInput} cursor="pointer" />
              )}
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {filteredData.length !== 0 && (
        <Stack sx={filteredDataStackStyles}>
          {filteredData.slice(0, 30).map((value, key) => {
            return (
              <Link to={`/catalog/${value.id}`} className="searched-item">
                <p>{value.name}</p>
              </Link>
            );
          })}
        </Stack>
      )}
    </Stack>
  );
};
