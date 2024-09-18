export interface Transaction {
    id: number;
    type: 'income' | 'expense';
    description: string;
    amount: number;
    date: Date;
  }