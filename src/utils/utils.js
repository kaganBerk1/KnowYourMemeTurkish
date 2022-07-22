import translations from "./translation";

export const getTranslated =(p_LangCode, p_Str)=>{
    //find correct obj
    const textItem = translations.find(s => s.code === p_Str);
    var text = "";
    console.log(textItem)
    if (textItem.code) {
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

