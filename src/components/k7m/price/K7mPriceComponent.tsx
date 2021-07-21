import classes from "../k7m.module.css";
import { Grid } from "@atomic/grid";
import { Header } from "@atomic/header";
import {
  ActionTr,
  IconType,
  Shadow,
  Table,
  TBody,
  TdText,
  THead,
  ThText,
  Tr,
} from "@atomic/ui";
import { PriceDataK7M, TableHeaderItem } from "../../../app/types";
import { isVoid, useWith } from "@atomic/utils";
import React, { useState } from "react";

const header = [
  { key: "type", title: "Тип условия", width: "200px" },
  { key: "strat", title: "Стратегия", width: "140px" },
  { key: "norm", title: "Нормативное", width: "140px" },
  { key: "fact", title: "Фактическое", width: "140px" },
  { key: "kot", title: "Котируемое", width: "100px" },
  { key: "period", title: "Период", width: "100px" },
  { key: "actions", title: "Действия", width: "100px" },
];

export function K7mPriceComponent() {
  const [data, setData] = useState<PriceDataK7M[]>([]);

  return (
    <Shadow className={classes.shadow}>
      <Grid rowAlign="start" fullWidth>
        <Header title="Цена" size="sm"></Header>

        <Table columnsWidth={header}>
          <THead>
            <Tr>
              {header.map((item) => (
                <ThText key={item.key}>{item.title}</ThText>
              ))}
            </Tr>
          </THead>
          <TBody>
            {data
              .filter((_, i) => i < 2)
              .map((item, i) => (
                <Tr key={item.type}>
                  <TdText>{item.type}</TdText>
                  <TdText>{item.strat}</TdText>
                  <TdText tAlign="right" empty={i === data.length - 1}>
                    {item.norm.toLocaleString("ru-RU")}
                  </TdText>
                  <TdText>{item.fact.toLocaleString("ru-RU")}</TdText>
                  <TdText>{item.kot.toLocaleString("ru-RU")}</TdText>
                  <TdText>{item.period_start + " - " + item.period_end}</TdText>
                  <TdText>Action</TdText>
                </Tr>
              ))}
            <ActionTr
              iconType={IconType.addSmallSolid24Figma}
              colSpan={header.length}
            >
              Добавить строку
            </ActionTr>
          </TBody>
        </Table>
      </Grid>
    </Shadow>
  );
}
