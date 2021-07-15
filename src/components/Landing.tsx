import { useParams } from "react-router";
import { OrganizationInfo } from "./OrganizationInfo";
import { Page } from "@atomic/page";
import { PageHeader } from "@atomic/page-header";
import { StrategiesComponent } from "./StrategiesComponent";

export function Landing() {
  console.log("Landing init");

  let idStr = useParams<{ id?: string }>().id;
  if (idStr) {
    let id = +idStr;

    return (
      <Page header={<PageHeader title={"КФЮЛ.УК"} />}>
        <OrganizationInfo id={id}></OrganizationInfo>
        <StrategiesComponent id={id}></StrategiesComponent>
      </Page>
    );
  } else {
    return <></>;
  }
}
