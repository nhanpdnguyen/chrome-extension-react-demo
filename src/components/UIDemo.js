import React from 'react';
import './UIDemo.scss';
import Select, {
  components,
  createFilter,
  mergeStyles,
  AsyncSelect,
  CheckboxSelect,
  CountrySelect,
  RadioSelect,
  CreatableSelect,
  AsyncCreatableSelect,
  PopupSelect,
} from '@atlaskit/select';
import { ProgressTracker, Stages } from '@atlaskit/progress-tracker';
import { DatePicker, DateTimePicker, TimePicker } from '@atlaskit/datetime-picker';
import Button, { ButtonGroup } from '@atlaskit/button';

const options = [
  { label: 'Adelaide', value: 'adelaide' },
  { label: 'Brisbane', value: 'brisbane' },
  { label: 'Canberra', value: 'canberra' },
  { label: 'Darwin', value: 'darwin' },
  { label: 'Hobart', value: 'hobart' },
  { label: 'Melbourne', value: 'melbourne' },
  { label: 'Perth', value: 'perth' },
  { label: 'Sydney', value: 'sydney' },
];

const items = [
  {
    id: 'disabled-1',
    label: 'Disabled Step',
    percentageComplete: 100,
    status: 'disabled',
    href: '#',
  },
  {
    id: 'visited-1',
    label: 'Visited Step',
    percentageComplete: 100,
    status: 'visited',
    href: '#',
  },
  {
    id: 'current-1',
    label: 'Current Step',
    percentageComplete: 0,
    status: 'current',
    href: '#',
  },
  {
    id: 'unvisited-1',
    label: 'Unvisited Step 1',
    percentageComplete: 0,
    status: 'unvisited',
    href: '#',
  },
  {
    id: 'unvisited-2',
    label: 'Unvisited Step 2',
    percentageComplete: 0,
    status: 'unvisited',
    href: '#',
  },
  {
    id: 'unvisited-3',
    label: 'Unvisited Step 3',
    percentageComplete: 0,
    status: 'unvisited',
    href: '#',
  },
];

const Row = (props) => (
  <div css={{ padding: 8 }} {...props} />
);

class UIDemo extends React.Component {
  render() {
    return (
      <div className="ui-demo">
        <h3>Select</h3>
        <Select options={options} />
        <h3>Progres Tracker</h3>
        <ProgressTracker items={items} />
        <h3>Date / time picker</h3>
        <DateTimePicker id="datetimepicker-1"/>
        <h3>Button</h3>
        <Row>
          <Row>
            <ButtonGroup appearance="primary">
              <Button>First Button</Button>
              <Button>Second Button</Button>
              <Button>Third Button</Button>
            </ButtonGroup>
          </Row>
        </Row>
      </div>);
  }
}

export default UIDemo;