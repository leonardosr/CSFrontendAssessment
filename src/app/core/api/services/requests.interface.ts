export interface IRequestData {
    id?: number;
    RequestName: string;
    Requestor: number;
    GoodEnding: 'Yes' | 'No' | 'Depends';
    Description: string;
    NeedStoryteller: boolean;
    Storyteller: number;
    WantedCharacters: string;
    Deadline: number;
    Budget: number;
    Status: 'New' | 'Draft';
}

export interface IGetRequestParams {
    page: string;
    pageSize: string;
    sortBy: string;
    desc: boolean;
    searchString: string;
}