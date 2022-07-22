export const getTranslated = (p_LangCode, p_Str) => {
    //find correct obj
    const textItem = translation.find(s => s.code === p_Str);
    var text = "";
    if (textItem) {
        try {
            text = textItem.lang[`${p_LangCode}`];

        } catch (err) {
            text = p_Str;
        }

    }
    else {
        text = p_Str;
    }

    return text;
}

exports.getTranslated=getTranslated;