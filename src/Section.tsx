import * as React from "react";

export interface SectionProps {
  name: string;
  currentColor: string;
  action: (data: number, color: string) => string;
  hideInput?: boolean;
}

export function Section(props: React.PropsWithChildren<SectionProps>) {
  const [data, setData] = React.useState(1);

  const changedColor = props.action(data / 100, props.currentColor);

  return (
    <tr>
      <td>
        <a
          href={`https://polished.js.org/docs/#${props.name.toLowerCase()}`}
          target="_blank"
          rel="noreferrer"
        >
          {props.name}
        </a>
      </td>
      <td>
        {!props.hideInput && (
          <label>
            <input
              type="number"
              value={data}
              min="0"
              max="100"
              onChange={(e) => setData(parseFloat(e.currentTarget.value))}
            />
            %
          </label>
        )}
      </td>
      <td
        style={{
          width: 100,
          background: changedColor
        }}
      />
      <td>{changedColor}</td>
    </tr>
  );
}
