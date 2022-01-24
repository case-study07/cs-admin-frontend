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
  IschangeColor: number;
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
    id: number;
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
    id: number;
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
    id: number;
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
    shape: {
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
    airConditoner: {
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
    handle: {
      id: number;
      name: string;
      createdAt: string;
      updatedAt: string;
      deletedAt: null | string;
    };
  };
}
