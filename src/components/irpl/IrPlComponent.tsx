import { gql, useQuery } from "@apollo/client";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { useParams } from "react-router";
import { OrganizationType } from "../../app/types";
import { Checkbox, CollapsePanel, Grid, Loader } from "@atomic/ui";
import classes from "./OrganizationInfo.module.css";
import { or } from "ramda";

interface OrgInfoProps {
  id: number;
}

export function IrPlComponent(props: OrgInfoProps) {
  return <h1>IRPL</h1>;
}
