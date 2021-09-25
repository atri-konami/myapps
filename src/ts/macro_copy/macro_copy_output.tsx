import * as React from 'react';
import Tooltip from '@material-ui/core/Tooltip'

interface Props {
    processedText: string[][]
}

const MacroCopyOutput: React.FC<Props> = (props: Props) => {
    const [copyMessage, setCopyMessage] = React.useState('copy to clipboard')

    const copyText = (i: number) => () => {
        import(/* webpackChunkName: "copy-to-clipboard"*/'copy-to-clipboard')
        .then((copy) => {
            copy.default(props.processedText[i].join('\n'))
            setCopyMessage('copied!')
            setTimeout(() => setCopyMessage('copy to clipboard'), 2000)
        })
    }

    return (
        <React.Fragment>
            <div style={{ display:'inline-block', width: '50%' }}>
                {props.processedText.map((v, i) => {
                    return (
                        <div className="container mb-3" key={i}>
                            <div className="row col-9 mb-3">
                                <h2 className="col mb-0">Output #{i+1}:</h2>
                                <Tooltip arrow title={copyMessage} placement="top">
                                    <button className="col-auto float-end btn btn btn-outline-primary" type="button" onClick={copyText(i)}>Copy</button>
                                </Tooltip>
                            </div>
                            <div className="col-9">
                                <textarea className="form-control" rows={20} readOnly value={v.join('\n')} wrap="off" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default MacroCopyOutput