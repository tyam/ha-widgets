import { h } from 'hyperapp';
import { Button, HBox, VBox, Scrim, Dialog, Spinner, viewHaw } from 'haw';

const ScrimButton = Scrim.Trigger(Button);

export const view11 = (state, actions) => {
  return (
    <VBox>
      <HBox>
        <ScrimButton targetId="modal">Modal</ScrimButton>
        <ScrimButton targetId="spinner" shape="contained">Spinner</ScrimButton>
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
      <Scrim id="spinner" light>
        <Spinner />
      </Scrim>
      {viewHaw(state, actions)}
    </VBox>
  )
}