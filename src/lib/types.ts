
export interface QuoteData {
  location: string;
  departureDate: Date;
  departureTime: string;
  returnDate: Date;
  returnTime: string;
  carModel: string;
  name: string;
  email: string;
  phone: string;
}

export interface SimplifiedQuoteData {
  departureDate: Date;
  departureTime: string;
  returnDate: Date;
  returnTime: string;
}
