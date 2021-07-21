import { SyntheticEvent, useState } from "react";
import { TabItem } from "../app/types";
import { CollapsePanel, Tabs } from "@atomic/ui";
import { prop, propOr } from "ramda";
import classes from "./StrategiesComponent.module.css";
import { K7mComponent } from "./k7m/K7mComponent";
import { IrPlComponent } from "./irpl/IrPlComponent";

const items: TabItem[] = [
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
  const onChange = (tabId: string) => {
    console.log(tabId);
    for (let item of items) {
      if (item.id === tabId) setValue(item);
    }
  };

  const clickHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    setOpened(!opened);
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
