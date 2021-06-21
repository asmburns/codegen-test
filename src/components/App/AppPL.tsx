import * as React from "react";
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import {
    IconType,
    MenuItem,
    MenuSideTop,
    Panel,
    PanelHeader,
    RootComponent,
    Section,
    Sidebar,
    Workspace
} from "ufs-ui";

import DataTable from "../DataTable/DataTable";
import DataForm from "../DataForm/DataForm";

export default function AppPL() {
    return (
        <RootComponent>

            <Sidebar>
                <MenuSideTop>
                    <MenuItem className="sber_logo"/>
                    <Link to="/" replace>
                        <MenuItem text="Таблица данных" title="Таблица данных" icon={IconType.MENU_CATALOG}/>
                    </Link>
                    <Link to="/form" replace>
                        <MenuItem text="Форма добавления записи" title="Форма добавления записи"
                                  icon={IconType.MENU_FEEDBACK}/>
                    </Link>
                </MenuSideTop>
            </Sidebar>

            <Section>
                <Workspace>
                    <Panel>

                        <PanelHeader>
                            Демоприложениe
                        </PanelHeader>

                        <Switch>
                            <Route path="/" component={DataTable} exact/>
                            <Route path="/form" component={DataForm}/>
                        </Switch>

                    </Panel>
                </Workspace>
            </Section>

        </RootComponent>
    )
}