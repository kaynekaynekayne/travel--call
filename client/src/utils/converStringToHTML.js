export const ConvertStringToHTML = function(text) {
    const arr=text && text.split('<h3').map(item=>'<div><h3'+item+'</div>').slice(1);
    return <div dangerouslySetInnerHTML={{__html:arr && arr.join('')}}></div>;
};