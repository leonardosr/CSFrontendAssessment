import * as moment from 'moment';

export function timestampToDate(value: number, format: string = "YYYY-MM-DD") {
    return moment(value).format(format);
}

export function ngbDatepickerToTimestamp(value: {year: number, month: number, day: number}): number {
    return moment(`${value.year}${value.month}${value.day}`, 'YYYYMMDD').valueOf();
}

export function parseWantedCharactersList(characterList: string[]) {
    let characterString: string = '';

    if(characterList) {
        characterList.forEach(character => characterString+= `${character};`);
        characterString = characterString.slice(0, -1);
    }

    return characterString;
}