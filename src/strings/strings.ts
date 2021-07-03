import LocalizedStrings from 'localized-strings'

export const Strings = new LocalizedStrings({
    en: {
        ButtonCancel: 'Cancel',
        ButtonContinue: 'Continue',
        ButtonDelete: 'Delete',
        ButtonSave: 'Save',
        DiagnosticInfo: 'Diagnostic Information',
        FieldAddButton: 'Add Note Field',
        FieldDeleteButton: 'Delete this note field',
        FieldDeleteFailed: 'Failed to delete note field.',
        FieldDeleteWarn:
            'Deleting this field will also delete all notes made' +
            ' using this field, and cannot be undone.',
        FieldDefaultTitle: 'Note ',
        FieldModifyFailed: 'Failed to modify note field',
        FieldTitle: 'Field title:',
        FieldType: 'Field type:',
        FieldTypeBoolean: 'Checkbox',
        FieldTypeNumeric: 'Number',
        FieldTypeText: 'Text',
        FileRequirements: 'CSV file requirements:',
        FileRequirement1: 'The first row must contain titles for the columns.',
        FileRequirement2:
            'The first column must contain unique ID numbers for each item.',
        FileRequirement3: 'There must be at least one row of data.',
        FileSavedError: 'File disappeared. Please save file again.',
        FileShareButton: 'Share file',
        FileShareDialogTitle: 'Share CSV file',
        FileShareFailedError: 'File share failed: ',
        FileShareUnavailableError: 'Sharing is not available on your device.',
        FileViewButton: 'View file',
        FileViewFailedError: 'File view failed: ',
        Error: 'Error',
        ErrorDatabase: 'Database error: ',
        ErrorFileSystem: 'Filesystem error: ',
        ErrorInvalidNumberRows:
            'Invalid CSV: At least one row of data is required, not including' +
            ' the header row',
        ErrorInvalidNumberColumns:
            'Invalid CSV: At least one column of data is required',
        ErrorInvalidFieldVariance:
            'Invalid CSV: All rows must have same number of fields',
        IntroInstructions: 'To begin, choose a CSV file from your device.',
        ItemCreate: 'Create item with %1 %2',
        ItemCreateError: 'Failed to create item.\r\n\r\nDetails: ',
        ItemCreateInstructions: 'Enter data for this item if desired:',
        ItemCreateValuePlaceholder: 'Value for %',
        ItemIdPlaceholder: 'Type item ID here',
        ItemNotFound: 'Item not found',
        ItemUnexpectedError: 'Unexpected database error. Please restart app.',
        LoadFileCanceled: 'File selection was canceled',
        LoadFileDone: 'Done loading data from file',
        LoadFileInfo:
            'File name: %\r\nFile size: % bytes\r\nNumber of rows: %' +
            '\r\nTime to load: % seconds',
        LoadFileError: 'Error loading file',
        Loading: 'Loading...',
        NoNoteFields: 'There are no note fields yet.',
        Notes: 'Notes',
        OpenFileButton: 'Choose CSV file',
        OpenFileInstructions:
            'This will replace all your current data and notes in the app, so' +
            ' please save a file first if you wish to keep them.',
        OpenFileWarn:
            'This will delete all current data and notes, and' +
            ' cannot be undone.',
        PleaseWait: 'Please wait...',
        ScreenNameView: 'View Items Data',
        ScreenNameFields: 'Configure Note Fields',
        ScreenNameSave: 'Save As File',
        ScreenNameOpen: 'Open File',
        ScreenNameSettings: 'Settings',
        SavedTemporary: 'Temporary file.',
        SavedToDevice: 'Saved to device.',
        SaveDirectoryPermissionWarn:
            'File was not saved on device, since' +
            ' a folder was not selected.\r\n\r\nYou can still view or share' +
            ' the file.',
        SaveFileName: 'File name:',
        SaveInclude: 'Include in file:',
        SaveItemsAll: 'All items',
        SaveItemsHavingNotes: 'Only items having notes',
        SaveThereAreNoNotes:
            'There are no items with notes, so the CSV file' +
            ' will have no items.',
        SaveWriteFileWarn: 'Failed to write file on device.\r\n\r\nDetails: ',
        ViewScreenInstructions: 'Enter an item ID above to view its info.',
        Warning: 'Warning',
    },
})
Strings.setLanguage(navigator.language)
