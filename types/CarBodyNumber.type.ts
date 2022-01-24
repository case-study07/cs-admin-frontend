export interface CarBodyNumber {
  id: number;
  makerId: number;
  carModelId: number;
  shapeId: number;
  fuelId: number;
  exteriorColorId: number;
  interiorColorId: number;
  shiftId: number;
  gearId: number;
  airConditonerId: number;
  importedCarId: number;
  handleId: number;
  airBackId: number;
  doorNumber: number;
  grade: string;
  format: string;
  engineSize: string;
  modelYear: number;
  colorNo: number;
  carBodyNumber: number;
  crewNumber: number;
  evaluationPoint: string;
  cigarette: string;
  meterExchangeHistory: string;
  scratchEvaluation: string;
  CarHistory: string;
  carInspection: string;
  suggestedAmount: number;
  mileage: number;
  exterior: string;
  interior: string;
  IschangeColor: false;
  SuggestedListingOne: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  listingCar: null | string;
  maker: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
  };
  carModel: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
  };
  shift: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
  };
  gear: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
  };
  fuel: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
  };
  airBack: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
  };
  handle: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
  };
  airConditoner: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
  };
  shape: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
  };
  importedCar: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
  };
  exteriorColor: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
  };
  interiorColor: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
  };
}
