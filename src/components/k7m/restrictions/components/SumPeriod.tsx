import { BaseInputChangeEvent, Grid, NumberInput } from "@atomic/ui";
import { useState } from "react";
import { mockComponent } from "react-dom/test-utils";
import moment from "moment";
import { relativeTimeWithPlural } from "../../../../app/functions";

export function SumPeriod() {
  const [creditSum, setCreditSum] = useState<number>();
  const [creditLen, setCreditLen] = useState<number>();
  const [overSum, setOverSum] = useState<number>();
  const [overLen, setOverLen] = useState<number>();

  return (
    <Grid colSizes="1fr 2fr 2fr">
      <Grid rowAlign="start" colAlign="center">
        Кредит
      </Grid>
      <Grid>
        <NumberInput
          title="Cумма"
          variant="outline"
          onChange={(e: BaseInputChangeEvent, value: string) => {
            setCreditSum(Number(value));
          }}
          value={creditSum}
          size="sm"
          prefix={<></>}
          postfix={"руб."}
        />
      </Grid>
      <Grid padding="0 0 0 5px">
        <NumberInput
          title="Срок"
          variant="outline"
          onChange={(e: BaseInputChangeEvent, value: string) => {
            setCreditLen(Number(value));
          }}
          value={creditLen}
          size="sm"
          prefix={<></>}
          postfix={relativeTimeWithPlural(creditLen, true, "MM")}
        />
      </Grid>
      <Grid rowAlign="start" colAlign="center">
        Овердрафт
      </Grid>
      <Grid>
        <NumberInput
          title="Cумма"
          variant="outline"
          onChange={(e: BaseInputChangeEvent, value: string) => {
            setOverSum(Number(value));
          }}
          value={overSum}
          size="sm"
          prefix={<></>}
          postfix={"руб."}
        />
      </Grid>
      <Grid padding="0 0 0 5px">
        <NumberInput
          title="Срок"
          variant="outline"
          onChange={(e: BaseInputChangeEvent, value: string) => {
            setOverLen(Number(value));
          }}
          value={overLen}
          size="sm"
          prefix={<></>}
          postfix={relativeTimeWithPlural(overLen, true, "MM")}
        />
      </Grid>
    </Grid>
  );
}
