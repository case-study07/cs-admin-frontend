export interface ListingCar {
  id: number;
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
  IschangeColor: 0;
  SuggestedListingOne: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
  CarBodyImage: [
    {
      id: number;
      img: string;
    }
  ];
  salesPoint: [
    {
      id: number;
      point: string;
      listingCarId: number;
    }
  ];
  addition: {
    id: 1;
    isPS: boolean;
    isPW: boolean;
    isAW: boolean;
    isSR: boolean;
    isBACK: boolean;
    isPEEL: boolean;
    isAB: boolean;
    isTV: boolean;
    isNAVI: boolean;
    isRSP: boolean;
    isCAS: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: null;
  };
  testingRecord: {
    id: 1;
    repaired: string;
    jack: string;
    tool: string;
    text: string;
    recycling: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: null;
  };
  exhibitorEntry: {
    id: number;
    repairHistory: boolean;
    jack: boolean;
    tool: boolean;
    text: string;
    recyclePrice: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: null;
  };
  paperClass: {
    id: 1;
    securityDocument: boolean;
    manual: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: null;
  };
  carBodyNumber: {
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
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
  };
}
