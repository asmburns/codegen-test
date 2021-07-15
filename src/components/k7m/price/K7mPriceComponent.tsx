import classes from "../k7m.module.css";
import { Grid } from "@atomic/grid";
import { Header } from "@atomic/header";
import { Shadow } from "@atomic/ui";

export function K7mPriceComponent() {
  return (
    <Shadow className={classes.shadow}>
      <Grid rowAlign="start" fullWidth>
        <Header title="Цена" size="sm"></Header>
        ывывыв
      </Grid>
    </Shadow>
  );
}
