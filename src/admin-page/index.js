import { createRoot } from "@wordpress/element";
import domReady from "@wordpress/dom-ready";
import { TabPanel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Page, Container } from "@goodwp/goodenberg/admin/components";
import InputsControls from "./inputs-controls";
import BasicComponents from "./basic-components";
import CardsPanels from "./cards-panels";
import styled from "@emotion/styled";

const TABS = [
  {
    name: "basic-components",
    title: __("Basic Components", "wc-vienna-2024"),
    value: "basic-components",
    Component: BasicComponents,
  },
  {
    name: "cards-panels",
    title: __("Cards & Panels", "wc-vienna-2024"),
    value: "cards-panels",
    Component: CardsPanels,
  },
  {
    name: "inputs-controls",
    title: __("Inputs & Controls", "wc-vienna-2024"),
    value: "inputs-controls",
    Component: InputsControls,
  },
];

const StyledTabPanel = styled(TabPanel)`
  > .components-tab-panel__tabs {
    background: #fff;
    justify-content: center;
    border-bottom: 1px solid #e2e4e7;
  }
`;

const ExamplePage = () => {
  return (
    <Page name="wc-vienna-2024">
      <Page.Header title={__("WordCamp Vienna 2024", "wc-vienna-2024")} icon="wordpress">
        {__("Example Components", "wc-vienna-2024")}
      </Page.Header>
      <Container hasMargin={false}>
        <StyledTabPanel
          className="wc-vienna-2024-tabs"
          tabs={TABS}
          initialTabName={"basic-components"}
          children={(Tab) => {
            return <Tab.Component />;
          }}
        />
      </Container>
    </Page>
  );
};

domReady(() => {
  const container = document.getElementById("wc-vienna-2024-examples-admin-page");
  const root = createRoot(container);
  root.render(<ExamplePage />);
});
