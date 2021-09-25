export const trimHeader = (text: string) => {
    return text.split('\n')
               .map((t) => t.slice(Math.max(t.indexOf(') '), t.indexOf('> ')) + 2))
               .join('\n');
}

export const addHeader = (head: string, text: string) => {
    return text.split('\n')
               .map((t) => head + ' ' + t)
               .join('\n');
}

export const addFooter = (foot: string, text: string) => {
    return text.split('\n')
               .map((t) => t + ' ' + foot)
               .join('\n');
}

export const paginate = (text: string) => {
    const texts = text.split('\n');
    const res = [];

    for (let i = 0; i < texts.length; i += 15) {
        res.push(texts.slice(i, i + 15))
    }

    return res
}