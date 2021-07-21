import {
  TextInput,
  NumberInput,
  Checkbox,
  Grid,
  BaseInputChangeEvent,
} from "@atomic/ui";
import React, { useState } from "react";

export function Procuring() {
  const [creditPledgeFlag, setCreditPledgeFlag] = useState<boolean>(false);
  const [deleayHypothecRegistration, setDeleayIpoRegistration] =
    useState<number>();
  const [deleayGuarantorRegistration, setDeleayGuarantorRegistration] =
    useState<number>();

  return (
    <>
      <Grid fullWidth colSizes="2fr 12fr" padding="10px">
        <Grid rowAlign="end" colAlign="center">
          <Checkbox
            onChange={setCreditPledgeFlag}
            checked={creditPledgeFlag}
          ></Checkbox>
        </Grid>
        <Grid rowAlign="start" colAlign="center" padding="0 0 0 5px">
          Кредитование с залогом
        </Grid>
        <Grid rowAlign="end" colAlign="center">
          <NumberInput
            title=""
            variant="outline"
            onChange={(e: BaseInputChangeEvent, value: string) => {
              setDeleayIpoRegistration(Number(value));
            }}
            value={deleayHypothecRegistration}
            size="sm"
          />
        </Grid>
        <Grid rowAlign="start" colAlign="center" padding="0 0 0 5px">
          Отсрочка регистрации ипотеки
        </Grid>
        <Grid rowAlign="end" colAlign="center">
          <NumberInput
            title=""
            variant="outline"
            onChange={(e: BaseInputChangeEvent, value: string) => {
              setDeleayGuarantorRegistration(Number(value));
            }}
            value={deleayGuarantorRegistration}
            size="sm"
          />
        </Grid>
        <Grid rowAlign="start" colAlign="center" padding="0 0 0 5px">
          Отсрочка по оформлению поручительства
        </Grid>
      </Grid>
    </>
  );
}
