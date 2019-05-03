import { h } from 'hyperapp';
import { Button, HBox, VBox } from 'haw';

export const view11 = (state, actions) => {
  return (
    <VBox>
      <HBox>
        <Button>Button 1</Button>
        <Button shape="contained">Button 2</Button>
        <Button shape="open">Button 3</Button>
      </HBox>
    </VBox>
  )
}