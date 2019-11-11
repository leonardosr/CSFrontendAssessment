import { IdataGridColumn } from 'src/app/common-ui/components/data-grid.interface';

export const ACTIVE_ITEMS_COLUMNS_CONFIG: IdataGridColumn[] = [
    {
      columnId: 'id',
      type: 'number',
      columnLabel: 'ID',
      sortable: true
    },
    {
      columnId: 'RequestName',
      type: 'text',
      columnLabel: 'Request Name',
      sortable: true
    },
    {
      columnId: 'Requestor',
      type: 'number',
      columnLabel: 'Requestor',
      sortable: false
    },
    {
      columnId: 'GoodEnding',
      type: 'boolean',
      columnLabel: 'Good Ending',
      sortable: false
    },
    {
      columnId: 'Description',
      type: 'text',
      columnLabel: 'Description',
      sortable: false
    },
    {
      columnId: 'NeedStoryteller',
      type: 'boolean',
      columnLabel: 'Need Storyteller',
      sortable: false
    },
    {
      columnId: 'WantedCharacters',
      type: 'text',
      columnLabel: 'Wanted Characters',
      sortable: false
    },
    {
      columnId: 'Deadline',
      type: 'timestamp',
      columnLabel: 'Deadline',
      sortable: true
    },
    {
      columnId: 'Budget',
      type: 'currency',
      columnLabel: 'Budget',
      sortable: false
    },
    {
      columnId: 'Status',
      type: 'boolean',
      columnLabel: 'Status',
      sortable: true
    }
  ]