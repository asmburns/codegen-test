import { gql, useQuery } from "@apollo/client";
import { SyntheticEvent, useState } from "react";
import { OrganizationType } from "../app/types";
import { Checkbox, CollapsePanel, Grid, Loader } from "@atomic/ui";
import classes from "./OrganizationInfo.module.css";
import { noop } from "@atomic/utils";

const GET_ORGANIZATION = gql`
  query getOrganization($id: ID!) {
    organization(id: $id) {
      id
      crmId
      eksId
      creditMark
      msh
      mer
      k7m
      creditType
    }
  }
`;

interface OrgInfoProps {
  id: number;
}

export function OrganizationInfo(props: OrgInfoProps) {
  const [opened, setOpened] = useState(true);

  const { loading, error, data } = useQuery(GET_ORGANIZATION, {
    variables: { id: props.id },
  });

  if (loading) {
    return (
      <Grid rowAlign="center" colAlign="center">
        <Loader size="xl" />
      </Grid>
    );
  }

  if (error) {
    console.log(error);
    return <span>Error</span>;
  }

  console.log(data);

  const organization: OrganizationType = data.organization;

  const clickHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    setOpened(!opened);
  };

  const content = (
    <Grid
      padding="12px"
      gap="0 12px"
      fullWidth
      colSizes="2fr 1fr 2fr 5fr"
      className={classes.contentItem}
    >
      <Grid rowAlign="end">CRM ID:</Grid>
      <Grid rowAlign="start">{organization.crmId}</Grid>
      <Grid rowAlign="end">ЕКС ID:</Grid>
      <Grid rowAlign="start">{organization.eksId}</Grid>
      <Grid rowAlign="end">Признак кредитующегося клиента:</Grid>
      <Grid rowAlign="start">{organization.creditMark}</Grid>
      <Grid rowAlign="end">Принадлежность к МЭР:</Grid>
      <Grid rowAlign="start">
        <Checkbox onChange={noop} checked={organization.mer} disabled />
      </Grid>
      <Grid rowAlign="end">Принадлежность к МCХ:</Grid>
      <Grid rowAlign="start">
        <Checkbox onChange={noop} checked={organization.msh} disabled />
      </Grid>
      <Grid rowAlign="end">Тип онлайн кредитования:</Grid>
      <Grid rowAlign="start">{organization.creditType}</Grid>
      <Grid rowAlign="end">Предложение К7М/ПЛ:</Grid>
      <Grid rowAlign="start">
        <Checkbox onChange={noop} checked={organization.k7m} disabled />
      </Grid>
    </Grid>
  );

  return (
    <CollapsePanel
      content={content}
      opened={opened}
      className={classes.wrapper}
    >
      <div className={classes.children} onClick={clickHandler}>
        <span>Информация о контрагенте</span>
        <span>{opened ? "Скрыть" : "Раскрыть"}</span>
      </div>
    </CollapsePanel>
  );
}
