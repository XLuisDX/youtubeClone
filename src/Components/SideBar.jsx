import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((x) => (
        <button
          className="category-btn"
          onClick={() => {
            setSelectedCategory(x.name);
          }}
          style={{
            background: x.name === selectedCategory && "#fc1503",
            color: "white",
          }}
          key={x.name}
        >
          <span
            style={{
              color: x.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {x.icon}
          </span>
          <span style={{ opacity: x.name === selectedCategory ? "1" : "0.8" }}>
            {x.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
