import * as React from "react";

interface Props {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const PlaceHolder = `例:
[01:23](Atri KonamiGaruda) ■散開
[01:23](Atri KonamiGaruda)        D1
[01:23](Atri KonamiGaruda)   D2        D3
[01:23](Atri KonamiGaruda)        D4
`;

const MacroCopyInput: React.FC<Props> = (props: Props) => {
  return (
    <div style={{ display: "inline-block", width: "50%" }}>
      <div className="container">
        <h2 className="col-9 mb-3">Input:</h2>
        <div className="col-9">
          <textarea
            className="form-control"
            onChange={props.onChange}
            placeholder={PlaceHolder}
            cols={100}
            rows={20}
            wrap="off"
          />
        </div>
      </div>
    </div>
  );
};

export default MacroCopyInput;
