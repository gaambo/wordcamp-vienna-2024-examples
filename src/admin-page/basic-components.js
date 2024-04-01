import { useState } from "@wordpress/element";
import {
  Panel,
  PanelBody,
  PanelRow,
  Button,
  ButtonGroup,
  __experimentalVStack as VStack,
  BaseControl,
  Spinner,
  Modal,
  Snackbar,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Page, Container } from "@goodwp/goodenberg/admin/components";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)`
  max-width: 600px !important;
`;

export default () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container contained={"300px"} as="div" hasMargin>
      <Panel header={__("Basic Components", "wc-vienna-2024")}>
        <PanelBody title={__("Buttons", "wc-vienna-2024")}>
          <VStack spacing={5}>
            <PanelRow>
              <Button variant="primary">{__("Primary", "wc-vienna-2024")}</Button>
              <Button variant="secondary">{__("Secondary", "wc-vienna-2024")}</Button>
              <Button variant="tertiary">{__("Tertiary", "wc-vienna-2024")}</Button>
            </PanelRow>
            <PanelRow>
              <Button variant="link">{__("Link", "wc-vienna-2024")}</Button>
              <Button isDestructive>{__("Destructive", "wc-vienna-2024")}</Button>
            </PanelRow>
            <PanelRow>
              <BaseControl label={"Button Group"}>
                <div>
                  <ButtonGroup>
                    <Button variant="secondary">{__("Button 1", "wc-vienna-2024")}</Button>
                    <Button variant="secondary">{__("Button 2", "wc-vienna-2024")}</Button>
                  </ButtonGroup>
                </div>
              </BaseControl>
            </PanelRow>
          </VStack>
        </PanelBody>
        <PanelBody title={__("Helper", "wc-vienna-2024")}>
          <VStack spacing={5}>
            <PanelRow>
              <BaseControl label={__("Spinner", "wc-vienna-2024")}>
                <div>
                  <Spinner />
                </div>
              </BaseControl>
            </PanelRow>
            <PanelRow>
              <BaseControl label={__("Modal", "wc-vienna-2024")}>
                <div>
                  <Button variant="primary" onClick={() => setShowModal(!showModal)}>
                    {__("Show Modal", "wc-vienna-2024")}
                  </Button>
                </div>
              </BaseControl>
            </PanelRow>
            <Snackbar actions={[{ label: "Dismiss" }]}>{__("Snackbar Notice", "wc-vienna-2024")}</Snackbar>
          </VStack>
        </PanelBody>
      </Panel>
      {showModal && (
        <StyledModal title={__("Modal", "wc-vienna-2024")} onRequestClose={() => setShowModal(false)}>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
            sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </StyledModal>
      )}
    </Container>
  );
};
