import {
  Panel,
  PanelBody,
  PanelRow,
  Card,
  Button,
  CardHeader,
  CardDivider,
  CardBody,
  CardMedia,
  CardFooter,
  __experimentalText as Text,
  __experimentalHeading as Heading,
  __experimentalVStack as VStack,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Page, Container } from "@goodwp/goodenberg/admin/components";

export default () => {
  return (
    <Container as="div" hasMargin contained>
      <VStack spacing={5}>
        <Panel header={__("Panel", "wc-vienna-2024")}>
          <PanelBody title={__("Panel Body", "wc-vienna-2024")}>
            <PanelRow>PanelRow</PanelRow>
          </PanelBody>
          <PanelBody title={__("Always Open", "wc-vienna-2024")} opened={true}>
            <PanelRow>PanelRow</PanelRow>
          </PanelBody>
          <PanelBody title={__("Initially closed", "wc-vienna-2024")} initialOpen={false}>
            <PanelRow>PanelRow</PanelRow>
          </PanelBody>
        </Panel>
        <Card>
          <CardHeader>
            <Heading>CardHeader</Heading>
          </CardHeader>
          <CardBody>
            <Text>CardBody</Text>
          </CardBody>
          <CardBody>
            <Text>CardBody (before CardDivider)</Text>
          </CardBody>
          <CardDivider />
          <CardBody>
            <Text>CardBody (after CardDivider)</Text>
          </CardBody>
          <CardMedia>
            <img
              alt="Card Media"
              src="https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80"
            />
          </CardMedia>
          <CardFooter>
            <Text>CardFooter</Text>
            <Button variant="secondary">Action Button</Button>
          </CardFooter>
        </Card>
      </VStack>
    </Container>
  );
};
