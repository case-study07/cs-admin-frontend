export interface Member {
  id: number;
  name: string;
  companyName: string;
  email: string;
  password: string;
  phoneNumber: string;
  iconImage: string;
  address: string;
  malicuousFlag: boolean;
  creditCheck: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
