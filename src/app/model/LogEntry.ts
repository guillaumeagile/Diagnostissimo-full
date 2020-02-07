export interface LogEntry {
    uid: string;
    product: string;
    entryDate: Date;
    user: string;
    windowsLogin: string;
    machine: string;
    content: string;
    error: string;
    entryStatus: string;
    requestUID: string;
}