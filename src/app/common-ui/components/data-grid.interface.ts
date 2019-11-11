export interface IdataGridConfig {
    gridTitle: string;
    columnConfig: IdataGridColumn[];
}

export interface IdataGridColumn {
    columnId: string;
    type: string;
    columnLabel: string;
    sortable: boolean;
}