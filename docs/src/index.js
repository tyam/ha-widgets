import { h } from 'hyperapp';
import { Button, HBox, VBox, Scrim, Dialog, Spinner, Popup, Menu, TextInput, TextArea, Echo, Checkbox, Radio, FileInput, viewHaw } from 'haw';

const ScrimButton = Scrim.Trigger(Button);
const PopupButton = Popup.Trigger(Button);
const PopupMenuItem = Popup.Trigger(Menu.Item);

export const view11 = (state, actions) => {
  return (
    <VBox g="2" noedge> 
      <HBox g="2" noedge>
        <ScrimButton targetId="modal">Modal</ScrimButton>
        <ScrimButton targetId="spinner" shape="contained">Spinner</ScrimButton>
        <PopupButton targetId="menu" shape="open">Popup</PopupButton>
        <Button shape="contained" onclick={() => actions.haw.snackbar.trigger('Hello Snackbar')}>Snackbar</Button>
      </HBox>
      <HBox g="2" noedge>
        <TextInput />
        <TextInput invalid />
        <TextInput disabled />
      </HBox>
      <HBox g="2" noedge>
        <TextArea />
        <TextArea invalid />
        <TextArea disabled />
      </HBox>
      <HBox g="2" noedge>
        <Echo>Echo</Echo> 
      </HBox>
      <HBox g="2" noedge>
        <FileInput id="fi1" />
        <FileInput id="fi2" invalid />
        <FileInput id="fi3" disabled />
      </HBox>
      <HBox g="2" noedge>
        <Checkbox id="cb1">Checkbox 1</Checkbox>
        <Checkbox id="cb2" invalid>Checkbox 2</Checkbox>
        <Checkbox id="cb3" disabled>Checkbox 3</Checkbox>
      </HBox>
      <HBox g="3" noedge>
        <Radio id="rb1" name="rb">Radio 1</Radio>
        <Radio id="rb2" name="rb" invalid>Radio 2</Radio>
        <Radio id="rb3" name="rb" disabled>Radio 3</Radio>
      </HBox>
      <Scrim id="modal">
        <Dialog>
          <div>テキスト</div>
          <HBox align="end">
            <ScrimButton shape="open" targetId="modal">OK</ScrimButton>
          </HBox>
        </Dialog>
      </Scrim>
      <Scrim id="spinner" light>
        <Spinner />
      </Scrim>
      <Popup id="menu">
        <Menu >
          <PopupMenuItem id="m1" doDelay>Item 1</PopupMenuItem>
          <PopupMenuItem id="m2" doDelay>Item 2</PopupMenuItem>
        </Menu>
      </Popup>
      {viewHaw(state, actions)}
    </VBox>
  )
}