import {
  CloseOutlined,
  SearchOffSharp,
  SearchOffTwoTone,
} from "@mui/icons-material";
import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { colors } from "../../metaData/colors.js";

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
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 6,
          width: "100%",
          alignItems: "end",
          justifyContent: "space-evenly",
        }}
      >
        <Stack>
          <Typography variant="h5" sx={{ textShadow: "12px 6px 12px" }}>
            Get some knowledge from...
          </Typography>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "center",
            mt: 2,
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              alignItems: "end",
            }}
          >
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
                <SearchOffTwoTone></SearchOffTwoTone>
              ) : (
                <CloseOutlined onClick={clearInput} />
              )}
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {filteredData.length !== 0 && (
        <Stack
          sx={{
            backgroundColor: colors.white,
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            overflow: "hidden",
            overflowY: "auto",
            width: "300px",
            height: "140px",
            borderRadius: "6px",

            "&::-webkit-scrollbar": {
              // borderRadius: "2px",
            },
          }}
        >
          {filteredData.slice(0, 30).map((value, key) => {
            return (
              <Link
                href={`/catalog/${value.id}`}
                target="_blank"
                sx={{
                  textDecoration: "none",
                  margin: "4px",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "20px",
                    padding: "2px 24px",
                    borderRadius: "4px",
                    transition: "all 350ms",
                    color: colors.black,
                    "&:hover": {
                      backgroundColor: colors.black,
                      color: colors.gold,
                    },
                  }}
                >
                  {value.name}
                </Typography>{" "}
              </Link>
            );
          })}
        </Stack>
      )}
    </Stack>
  );
};
