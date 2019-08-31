/**
 * sessionStorage简化
 * */


const localProxy = {
    get brandHistory() {
        let history = sessionStorage.getItem('brandHistory');
        history = history ? JSON.parse(history) : [];
        return history;
    },
    set brandHistory(data) {
        if (typeof data === 'object') {
            sessionStorage.setItem('brandHistory', JSON.stringify(data));
        } else {
            throw new Error('[sessionStorage error] brandHistory must be Array');
        }
    },
    get searchHistory() {
        let history = sessionStorage.getItem('searchHistory');
        history = history ? JSON.parse(history) : [];
        return history;
    },
    set searchHistory(data) {
        if (typeof data === 'object') {
            if (data.length > 20) {
                data.splice(19, data.length - 20);
            }
            sessionStorage.setItem('searchHistory', JSON.stringify(data));
        } else {
            throw new Error('[sessionStorage error] searchHistory must be Array');
        }
    }
};

export default localProxy;
