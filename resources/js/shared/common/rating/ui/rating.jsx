import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';


export function StarRating({ isReadOnly }) {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  
  return (
    <Box
      sx={{
        width: 120,
        height: 24,
      }}
    >
      <Rating
        value={value}
        precision={0.5}
        readOnly={isReadOnly}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
    </Box>
  );
}