import * as React from "react";
import { ChromePicker, RGBColor } from "react-color";

export interface ColorPickerProps {
  onChange: (value: string) => void;
}

export function ColorPicker(props: ColorPickerProps) {
  const [color, setColor] = React.useState<RGBColor>({
    a: 1,
    r: 0,
    g: 0,
    b: 0
  });

  const colorRgba = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;

  React.useEffect(() => {
    props.onChange(colorRgba);
  }, [colorRgba]);

  return (
    <div>
      <ChromePicker color={color} onChange={(e) => setColor(e.rgb)} />
    </div>
  );
}
