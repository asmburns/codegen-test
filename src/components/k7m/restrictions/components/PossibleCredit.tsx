import { TextInput, Checkbox, Grid } from "@atomic/ui";
import React, { ChangeEvent, useState } from "react";

export function PossibleCredit() {
  const [cancelReason, setCancelReason] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [allCheck, setAllCheck] = useState<boolean>(false);
  const [merCheck, setMerCheck] = useState<boolean>(false);
  const [mchCHeck, setMchCHeck] = useState<boolean>(false);

  return (
    <>
      <Grid fullWidth colSizes="1fr 6fr" padding="10px">
        <Grid rowAlign="start" colAlign="center">
          Не выставлять:
        </Grid>
        <Grid rowAlign="start" colAlign="center"></Grid>
        <Grid rowAlign="end" colAlign="center">
          <Checkbox onChange={setAllCheck} checked={allCheck}></Checkbox>
        </Grid>
        <Grid rowAlign="start" colAlign="center">
          Все предложения
        </Grid>
        <Grid rowAlign="end" colAlign="center">
          <Checkbox onChange={setMerCheck} checked={merCheck}></Checkbox>
        </Grid>
        <Grid rowAlign="start" colAlign="center">
          МЭР
        </Grid>
        <Grid rowAlign="end" colAlign="center">
          <Checkbox onChange={setMchCHeck} checked={mchCHeck}></Checkbox>
        </Grid>
        <Grid rowAlign="start" colAlign="center">
          МСХ
        </Grid>
      </Grid>
      <Grid fullWidth colSizes="0.5fr">
        <Grid>
          <TextInput
            title="Причина отказа"
            variant="outline"
            onChange={setCancelReason}
            value={cancelReason}
            prefix={<></>}
          />
        </Grid>
        <Grid>
          <TextInput
            title="Комментарий"
            variant="outline"
            onChange={setComment}
            value={comment}
            multiline
            prefix={<></>}
            minRows={3}
          />
        </Grid>
      </Grid>
    </>
  );
}
