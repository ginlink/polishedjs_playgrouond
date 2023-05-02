import * as React from "react";
import * as polished from "polished";
import { Section } from "./Section";
import { ColorPicker } from "./ColorPicker";

export default function App() {
  const [currentColor, setCurrentColor] = React.useState("rgba(0,0,0,1)");

  return (
    <div className="App">
      <h1>PolishedJS playground</h1>

      <div style={{ display: "flex" }}>
        <table cellPadding="10">
          <thead>
            <tr>
              <th>Function name</th>
              <th>Add argument to polished</th>
              <th>Preview</th>
              <th>Final color</th>
            </tr>
          </thead>
          <tbody>
            <Section
              name="adjustHue"
              action={polished.desaturate}
              currentColor={currentColor}
            />
            <Section
              name="complement"
              action={(_, color) => polished.complement(color)}
              currentColor={currentColor}
              hideInput
            />
            <Section
              name="darken"
              action={polished.darken}
              currentColor={currentColor}
            />
            <Section
              name="desaturate"
              action={polished.desaturate}
              currentColor={currentColor}
            />
            <Section
              name="grayscale"
              action={(_, color) => polished.grayscale(color)}
              currentColor={currentColor}
              hideInput
            />
            <Section
              name="invert"
              action={(_, color) => polished.invert(color)}
              currentColor={currentColor}
              hideInput
            />
            <Section
              name="lighten"
              action={polished.lighten}
              currentColor={currentColor}
            />
            <Section
              name="saturate"
              action={polished.saturate}
              currentColor={currentColor}
            />
            <Section
              name="shade"
              action={polished.shade}
              currentColor={currentColor}
            />
          </tbody>
        </table>

        <ColorPicker onChange={setCurrentColor} />
      </div>
    </div>
  );
}
