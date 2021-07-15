import { gql, useQuery } from "@apollo/client";
import React, { SyntheticEvent, useState } from "react";
import { useParams } from "react-router";
import { IItem, OrganizationType } from "../app/types";
import { OrganizationInfo } from "./OrganizationInfo";
import { Page } from "@atomic/page";
import { PageHeader } from "@atomic/page-header";
import { CollapsePanel, Grid, Tabs } from "@atomic/ui";
import { always, find, ifElse, pipe, prop, propEq, propOr } from "ramda";
import { isVoid } from "@atomic/utils";
import classes from "./StrategiesComponent.module.css";
import { K7mComponent } from "./k7m/K7mComponent";
import { IrPlComponent } from "./irpl/IrPlComponent";

const items: IItem[] = [
  {
    title: "К7М",
    id: "K7M",
  },
  {
    title: "ИР/ПЛ",
    id: "IRPL",
  },
];

interface StrategyProps {
  id: number;
}

export function StrategiesComponent(props: StrategyProps) {
  const [opened, setOpened] = useState(true);
  const [value, setValue] = useState(items[0]);
  const onChange = (value: string) => {
    console.log(value);
    for (let item of items) {
      if (item.id === value) setValue(item);
    }
  };

  const clickHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    setOpened((opened) => !opened);
  };

  const switchTabs = (itemId: string) => {
    switch (itemId) {
      case "K7M":
        return <K7mComponent id={props.id} />;
      case "IRPL":
        return <IrPlComponent id={props.id} />;
      default:
        return <h1>K7MDEF</h1>;
    }
  };

  const content = (
    <>
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
    </>
  );

  return (
    <CollapsePanel
      content={content}
      opened={opened}
      className={classes.wrapper}
    >
      <div className={classes.children} onClick={clickHandler}>
        <span>Стратегии работы с клиентом</span>
        <span>{opened ? "Скрыть" : "Раскрыть"}</span>
      </div>
    </CollapsePanel>
  );
}
