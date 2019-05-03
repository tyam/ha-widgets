import { h } from 'hyperapp';
import { Button, HBox, VBox, Scrim, Dialog, Spinner, Popup, Menu, viewHaw } from 'haw';

const ScrimButton = Scrim.Trigger(Button);
const PopupButton = Popup.Trigger(Button);
const PopupMenuItem = Popup.Trigger(Menu.Item);

export const view11 = (state, actions) => {
  return (
    <VBox>
      <HBox>
        <ScrimButton targetId="modal">Modal</ScrimButton>
        <ScrimButton targetId="spinner" shape="contained">Spinner</ScrimButton>
        <PopupButton targetId="menu" shape="open">Popup</PopupButton>
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