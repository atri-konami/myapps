import React, { Suspense } from 'react';
import * as Process from './process'
//import * as style from '../scss/style.scss';
import MacroCopyInput from './macro_copy_input'
//import MacroCopyOutput from './macro_copy_output'
const MacroCopyOutput = React.lazy(() => import(/* webpackChunkName: "macro_copy_output" */'./macro_copy_output'))

const MacroCopy: React.FC = (props) => {
    const [inputText, changeInputText] = React.useState('')
    const [processedText, changeProcessedText] = React.useState('')
    const [headerText, changeHeaderText] = React.useState('/p')
    const [footerText, changeFooterText] = React.useState('<se.9>')
    const [isHeaderSet, changeIsHeaderSet] = React.useState(true)
    const [isFooterSet, changeIsFooterSet] = React.useState(false)

    const onChangeInput: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => changeInputText(e.target.value)
    const processInput = () => {
        let processed = Process.trimHeader(inputText)
        if (processed === '') return;

        if (isHeaderSet) {
            processed = Process.addHeader(headerText, processed)
        }

        if (isFooterSet) {
            processed = Process.addFooter(footerText, processed)
        }

        changeProcessedText(processed)
    }

    const onChangeisHeaderSet = (e: React.ChangeEvent<HTMLInputElement>) =>{
        changeIsHeaderSet(e.target.checked)
    }

    const onChangeisFooterSet = (e: React.ChangeEvent<HTMLInputElement>) =>{
        changeIsFooterSet(e.target.checked)
    }

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">マクロコピ郎君(β)</a>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="usage">使い方</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container-fluid p-5">
                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-text="チャット欄に流れたマクロをコピペして整形！マクロコピ郎君(β)" data-hashtags="FFXIV #FF14" data-show-count="false">Tweet</a>
                <div className="row">
                    <div className="col-4">
                        <div className="form-check form-switch">
                            <div className="row align-items-center">
                                <div className="col-auto p-1">
                                    <input type="checkbox" className="form-check-input" checked={isHeaderSet} onChange={onChangeisHeaderSet} id="headercheck"/>
                                    <label className="form-check-label" htmlFor="headercheck">前につける:</label>
                                </div>
                                <div className="col-auto p-1">
                                    <input type="text" className="form-control" value={headerText} placeholder="例) /p, /e" onChange={(e) => changeHeaderText(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="form-check form-switch">
                            <div className="row align-items-center">
                                <div className="col-auto p-1">
                                    <input type="checkbox" className="form-check-input" checked={isFooterSet} onChange={onChangeisFooterSet} id="footercheck"/>
                                    <label className="form-check-label" htmlFor="footercheck">後ろにつける:</label>
                                </div>
                                <div className="col-auto p-1">
                                    <input type="text" className="form-control" value={footerText} placeholder="例) <se.9>, <wait.3>" onChange={(e) => changeFooterText(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary mb-3" onClick={processInput}>変換</button>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                    <MacroCopyInput onChange={onChangeInput}/>
                    <Suspense fallback={<div>Loading...</div>}>
                        {processedText !== '' && <MacroCopyOutput processedText={Process.paginate(processedText)}/>}
                    </Suspense>
                </div>
            </div>
        </React.Fragment>
    )
}


export default MacroCopy;