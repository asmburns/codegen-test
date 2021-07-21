import { Grid } from "@atomic/grid";
import { Header } from "@atomic/header";
import { Shadow, Tabs } from "@atomic/ui";
import { prop, propOr } from "ramda";
import { useState } from "react";
import { TabItem } from "../../../app/types";
import classes from "../k7m.module.css";
import { PossibleCredit } from "./components/PossibleCredit";
import { Procuring } from "./components/Procuring";
import { SumPeriod } from "./components/SumPeriod";

const items: TabItem[] = [
  {
    title: "Возможность кредитования",
    id: "POSS",
  },
  {
    title: "Обеспечение",
    id: "PROC",
  },
  {
    title: "Сумма, срок",
    id: "SUMPER",
  },
];

export function K7mRestrictionsComponent() {
  const [value, setValue] = useState(items[0]);
  const onChange = (tabId: string) => {
    console.log(tabId);
    for (let item of items) {
      if (item.id === tabId) setValue(item);
    }
  };

  const switchTabs = (id: string) => {
    switch (id) {
      case "POSS":
        return <PossibleCredit></PossibleCredit>;
      case "PROC":
        return <Procuring></Procuring>;
      case "SUMPER":
        return <SumPeriod></SumPeriod>;
      default:
        return <PossibleCredit></PossibleCredit>;
    }
  };

  return (
    <Shadow className={classes.shadow}>
      <Grid rowAlign="start" fullWidth>
        <Header title="Ограничения" size="sm"></Header>
        <Tabs
          items={items}
          value={value.title}
          name="storyTabs"
          filled
          keyExtractor={prop("id")}
          valueExtractor={prop("title")}
          countExtractor={propOr(void 0, "count")}
          onChange={onChange}
        />
        {switchTabs(value.id)}
      </Grid>
    </Shadow>
  );
}
