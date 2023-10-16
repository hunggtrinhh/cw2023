import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Drawer,
  Skeleton,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

import coverImg from "../../static/img/spy-x-family.jpg";

const theme = createTheme();

const inputStyles = {
  "& .MuiInputBase-input": {
    p: theme.spacing(1, 2),
  },
  "& .MuiFormLabel-root": {
    transform: `translate(${theme.spacing(2, 1).split(" ")}) scale(1)`,
  },
  "& .MuiFormLabel-root.Mui-focused, .MuiFormLabel-root.MuiFormLabel-filled": {
    transform: `translate(${theme.spacing(2, -1).split(" ")}) scale(0.75)`,
  },
};

const cardStyles = {
  p: theme.spacing(1, 2),
  display: "flex",
  cursor: "pointer",
  ":hover": {
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.5), 0px 1px 1px 0px rgba(0,0,0,0.25), 0px 1px 3px 0px rgba(0,0,0,0.25)",
  },
};

const mockDataComics = [
  {
    coverImg: coverImg,
    name: "Onepunch-man",
    otherName: [],
    author: "ONE",
    otherAuthor: [],
  },
  {
    coverImg: coverImg,
    name: "Onepunch-man",
    otherName: [],
    author: "ONE",
    otherAuthor: [],
  },
];

export default function DrawerSearchComic(props) {
  const { id, drawerSearchToggle, setDrawerSearchToggle } = props;

  const [valueSearch, setValueSearch] = useState("");
  const [comics, setComics] = useState([]);

  useEffect(() => {
    setComics(() => {
      return mockDataComics.filter(
        (comic) => valueSearch && comic.name.toLowerCase().includes(valueSearch)
      );
    });
  }, [valueSearch]);

  return (
    <Drawer
      id={id}
      anchor="top"
      open={drawerSearchToggle}
      onClose={() => {
        setDrawerSearchToggle(false);
        setValueSearch("");
      }}
    >
      <Box sx={{ py: 1, width: "40%", m: "auto" }}>
        <TextField
          sx={inputStyles}
          placeholder="Search ..."
          value={valueSearch}
          onChange={(event) => setValueSearch(event.target.value)}
          fullWidth
        />
        {valueSearch.length && !comics.length ? (
          <Typography sx={{ py: 1 }}>
            We couldn't find anything for "{valueSearch}"
          </Typography>
        ) : null}
        {comics.length ? (
          <Box sx={{ py: 1 }}>
            {comics.map((comic, index) => {
              return (
                <Card key={index} sx={{ ...cardStyles, my: 1 }}>
                  <CardMedia
                    component="img"
                    sx={{ width: "10%", h: "auto", borderRadius: 0.5 }}
                    image={comic.coverImg}
                    alt={comic.name}
                  />
                  <CardContent sx={{ px: 2, py: 0.5 }}>
                    <Typography component="div" variant="subtitle1">
                      {comic.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      component="div"
                    >
                      {comic.author}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
            <Card key="btn-show-more" sx={cardStyles}>
              <Typography>Show total results for "{valueSearch}"</Typography>
            </Card>
          </Box>
        ) : null}
      </Box>
    </Drawer>
  );
}
