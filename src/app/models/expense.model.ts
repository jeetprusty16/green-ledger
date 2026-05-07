export interface Expense {
  id: string;
  amount: number;
  category: ExpenseCategory;
  description: string;
  date: string;
  paymentMode: PaymentMode;
  createdBy: string;
  createdAt: string;
  updatedAt?: string;
  isDeleted?: boolean;
}

export enum ExpenseCategory {
  FOOD = 'Food',
  TRAVEL = 'Travel',
  OFFICE = 'Office',
  UTILITIES = 'Utilities',
  OTHER = 'Other'
}

export enum PaymentMode {
  CASH = 'Cash',
  UPI = 'UPI',
  CARD = 'Card'
}

export interface DailySummary {
  date: string;
  totalsByCategory: Record<string, number>;
  grandTotal: number;
  generatedAt: string;
}