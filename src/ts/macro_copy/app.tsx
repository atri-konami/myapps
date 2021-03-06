import React, { Suspense } from "react";
import { TwitterShareButton, TwitterIcon } from "react-share";
import * as Process from "./process";
//import * as style from '../scss/style.scss';
import MacroCopyInput from "./input";
//import MacroCopyOutput from './macro_copy_output'
const MacroCopyOutput = React.lazy(
  () => import(/* webpackChunkName: "macro_copy_output" */ "./output")
);

const MacroCopyApp: React.FC = () => {
  const [inputText, changeInputText] = React.useState("");
  const [processedText, changeProcessedText] = React.useState("");
  const [headerText, changeHeaderText] = React.useState("/p");
  const [footerText, changeFooterText] = React.useState("<se.9>");
  const [isHeaderSet, changeIsHeaderSet] = React.useState(true);
  const [isFooterSet, changeIsFooterSet] = React.useState(false);
  const [lineNumPerMacro, setLineNumPerMacro] = React.useState(15);

  const onChangeInput: React.ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    changeInputText(e.target.value);

  const processInput = (e: React.MouseEvent) => {
    e.preventDefault();
    let processed = Process.trimHeader(inputText);
    if (processed === "") return;

    if (isHeaderSet) {
      processed = Process.addHeader(headerText, processed);
    }

    if (isFooterSet) {
      processed = Process.addFooter(footerText, processed);
    }

    changeProcessedText(processed);
  };

  const onChangeisHeaderSet = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeIsHeaderSet(e.target.checked);
  };

  const onChangeisFooterSet = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeIsFooterSet(e.target.checked);
  };

  return (
    <React.Fragment>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-auto">
            <TwitterShareButton
              url="https://atri-konami.github.io/macro_copy"
              title="チャット欄に流れたマクロをコピペして整形！マクロコピ郎君(β)"
              hashtags={["FFXIV", "FF14"]}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
        </div>
        <div className="row">
          <form className="col-4">
            <div className="form-check form-switch">
              <div className="row align-items-center">
                <div className="col-auto p-1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={isHeaderSet}
                    onChange={onChangeisHeaderSet}
                    id="headercheck"
                  />
                  <label className="form-check-label" htmlFor="headercheck">
                    前につける:
                  </label>
                </div>
                <div className="col-auto p-1">
                  <input
                    type="text"
                    className="form-control"
                    value={headerText}
                    placeholder="例) /p, /e"
                    onChange={(e) => changeHeaderText(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="form-check form-switch">
              <div className="row align-items-center">
                <div className="col-auto p-1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={isFooterSet}
                    onChange={onChangeisFooterSet}
                    id="footercheck"
                  />
                  <label className="form-check-label" htmlFor="footercheck">
                    後ろにつける:
                  </label>
                </div>
                <div className="col-auto p-1">
                  <input
                    type="text"
                    className="form-control"
                    value={footerText}
                    placeholder="例) <se.9>, <wait.3>"
                    onChange={(e) => changeFooterText(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="row align-items-center">
                <span className="col-auto p-1">1マクロあたりの最大行数: </span>
                <div className="col-auto p-1">
                  <input
                    type="number"
                    max={15}
                    min={1}
                    className="form-control"
                    value={lineNumPerMacro}
                    placeholder="例) 14, 15"
                    onChange={(e) => {
                      const v = parseInt(e.target.value);
                      setLineNumPerMacro(
                        isNaN(v) ? 15 : Math.min(15, parseInt(e.target.value))
                      );
                    }}
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary mb-3"
              onClick={processInput}
            >
              変換
            </button>
          </form>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <MacroCopyInput onChange={onChangeInput} />
          <Suspense fallback={<div>Loading...</div>}>
            {processedText !== "" && (
              <MacroCopyOutput
                processedText={Process.paginate(processedText, lineNumPerMacro)}
              />
            )}
          </Suspense>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MacroCopyApp;
