import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

import Result from "../components/Result";
import SliderSelect from "../components/SliderSelect";
import TenureSelect from "../components/TenureSelect";

function Calculator() {
  const [data, setData] = useState({
    homeValue: 1000,
    downPayment: 1000 * 0.2,
    loanAmount: 1000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
    // monthlyPayment: 0,
  });

  console.log(data)

  return (
    <div className="App w-[90vw] md:w-[80vw] mx-auto">
      <Container maxWidth="xl" sx={{marginTop:4}}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Calculator;