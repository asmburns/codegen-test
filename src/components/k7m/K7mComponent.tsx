import { IItem } from "../../app/types";
import { Grid } from "@atomic/ui";
import { Page } from "@atomic/page";
import { PageHeader } from "@atomic/page-header";
import { K7mRestrictionsComponent } from "./restrictions/K7mRestrictionsComponent";
import { K7mPriceComponent } from "./price/K7mPriceComponent";

interface OrgInfoProps {
  id: number;
}

export function K7mComponent(props: OrgInfoProps) {
  return (
    <Grid padding="12px" gap="0 12px" fullWidth colSizes="1fr 1fr">
      <K7mRestrictionsComponent></K7mRestrictionsComponent>
      <K7mPriceComponent></K7mPriceComponent>
    </Grid>
  );
}
