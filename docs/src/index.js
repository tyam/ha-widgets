import { h } from 'hyperapp';
import { Button, HBox, VBox, Scrim, Dialog, viewHaw } from 'haw';

const ScrimButton = Scrim.Trigger(Button);

export const view11 = (state, actions) => {
  return (
    <VBox>
      <HBox>
        <ScrimButton targetId="modal">Modal</ScrimButton>
        <Button shape="contained">Button 2</Button>
        <Button shape="open">Button 3</Button>
      </HBox>
      <Scrim id="modal">
        <Dialog>
          <div>テキスト</div>
          <HBox align="end">
            <ScrimButton shape="open" targetId="modal">OK</ScrimButton>
          </HBox>
        </Dialog>
      </Scrim>
      {viewHaw(state, actions)}
    </VBox>
  )
}