import React, { useState, useEffect } from "react";
import { styled } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";

export default function MyWonderfulComponent({ props, children }) {
  const { id, options, count, color, sms } = props;
  const [ summ, setSumm ] = useState(count);
  
  const Title = styled(Typography)({
    color: color,
    fontSize: "18px",
  });

  useEffect(() => {
    console.log(sms); // output to the MyWonderfulComponent

    if (id && options?.params?.fields?.isDynamic) {
      setSumm(summ + 1);
    }
  }, []);

  console.log(summ);

  return (
    <>
      <Title variant="h1">Hello World!</Title>
      <Grid>
        <Grid item xs={12}>{children}</Grid>
      </Grid>
    </>
  );
}