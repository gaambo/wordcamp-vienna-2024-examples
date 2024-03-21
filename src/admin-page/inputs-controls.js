import { useState } from "@wordpress/element";
import {
  Panel,
  PanelBody,
  __experimentalVStack as VStack,
  BaseControl,
  TextControl,
  ToggleControl,
  __experimentalNumberControl as NumberControl,
  CheckboxControl,
  RadioControl,
  RangeControl,
  SelectControl,
  DatePicker,
  DateTimePicker,
  useBaseControlProps,
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { PageContent } from "@goodwp/goodenberg/admin/components/page";

export default () => {
  // `useBaseControlProps` is a convenience hook to get the props for the `BaseControl`
  // and the inner control itself. Namely, it takes care of generating a unique `id`,
  // properly associating it with the `label` and `help` elements.
  const { baseControlProps, controlProps } = useBaseControlProps({});

  const [textValue, setTextValue] = useState("");
  const [numberValue, setNumberValue] = useState(5);
  const [rangeValue, setRangeValue] = useState(20);
  const [toggleValue, setToggleValue] = useState(false);
  const [selectValue, setSelectValue] = useState("a");
  const [checkedValue, setCheckedValue] = useState(false);
  const [radioValue, setRadioValue] = useState("a");

  return (
    <PageContent.Container contained={"300px"} as="div" hasMargin>
      <Panel header={__("Form Inputs & Controls", "wc-vienna-2024")}>
        <PanelBody title={__("Basic Inputs", "wc-vienna-2024")}>
          <VStack spacing={5}>
            <BaseControl
              {...baseControlProps}
              label={__("Basic Control Wrapper", "wc-vienna-2024")}
              help={__("Help Text", "wc-vienna-2024")}
              __nextHasNoMarginBottom
            >
              <textarea
                {...controlProps}
                style={{
                  display: "block",
                  width: "100%",
                }}
                rows={4}
                defaultValue={"`BaseControl` is a wrapper for many other controls and renders a label and help text."}
              ></textarea>
            </BaseControl>
            <TextControl
              label={__("Text Control", "wc-vienna-2024")}
              __nextHasNoMarginBottom
              __next40pxDefaultSize
              value={textValue}
              onChange={setTextValue}
            />
            <BaseControl label={__("Toggle Control", "wc-vienna-2024")} __nextHasNoMarginBottom __next40pxDefaultSize>
              <ToggleControl
                label={__("Toggle Value", "wc-vienna-2024")}
                __nextHasNoMarginBottom
                __next40pxDefaultSize
                checked={toggleValue}
                onChange={setToggleValue}
              />
            </BaseControl>
            <NumberControl
              label={__("Number Control", "wc-vienna-2024")}
              isShiftStepEnabled={true}
              shiftStep={10}
              value={numberValue}
              onChange={setNumberValue}
              __nextHasNoMarginBottom
              __next40pxDefaultSize
            />
            <CheckboxControl
              checked={checkedValue}
              onChange={setCheckedValue}
              help={__("Check any or multiple values", "wc-vienna-2024")}
              label={__("Is checked", "wc-vienna-2024")}
            />
            <RadioControl
              label={__("User type", "wc-vienna-2024")}
              help={__("The type of the current user", "wc-vienna-2024")}
              selected={radioValue}
              options={[
                { label: __("Author"), value: "a" },
                { label: __("Editor"), value: "e" },
              ]}
              onChange={setRadioValue}
            />
            <SelectControl
              __next40pxDefaultSize
              options={[
                {
                  disabled: true,
                  label: __("Select an Option", "wc-vienna-2024"),
                  value: "",
                },
                {
                  label: __("Option A", "wc-vienna-2024"),
                  value: "a",
                },
                {
                  label: __("Option B", "wc-vienna-2024"),
                  value: "b",
                },
                {
                  label: __("Option C", "wc-vienna-2024"),
                  value: "c",
                },
              ]}
              value={selectValue}
              onChange={setSelectValue}
            />
          </VStack>
        </PanelBody>
        <PanelBody title={__("Advanced Inputs", "wc-vienna-2024")} initialOpen={false}>
          <VStack spacing={5}>
            <ToggleGroupControl label={__("Toggle Group Control", "wc-vienna-2024")} value="vertical" isBlock>
              <ToggleGroupControlOption value="horizontal" label={__("Horizontal", "wc-vienna-2024")} />
              <ToggleGroupControlOption value="vertical" label={__("Vertical", "wc-vienna-2024")} />
            </ToggleGroupControl>
            <RangeControl
              help={__("Value between 0 and 100", "wc-vienna-2024")}
              label={__("Numeric Value", "wc-vienna-2024")}
              max={100}
              min={0}
              value={rangeValue}
              onChange={setRangeValue}
            />
            <BaseControl label={__("Date Picker", "wc-vienna-2024")}>
              <DatePicker />
            </BaseControl>
            <BaseControl label={__("Date Time Picker", "wc-vienna-2024")}>
              <DateTimePicker />
            </BaseControl>
          </VStack>
        </PanelBody>
      </Panel>
    </PageContent.Container>
  );
};
