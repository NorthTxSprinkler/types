export interface Project {
  id?: string;
  projectName?: string;
  description?: string;
  startDate?: any;
  finishDate?: any;
  relatedEstimates?: string[];
  estimatedCost?: number;
  actualCost?: number;
  estimatedCostItems?: { cost: number; description: string }[];
  actualCostItems?: { cost: number; description: string }[];
}

export interface Client {
  id?: string;
}

export interface User {
  id: string;
  name: string;
  admin: boolean;
  instantiatePhoneSystem: boolean;
}

export interface IrrigationApt {
  customer: {
    name: string;
    tel?: string;
    email?: string;
    address?: any;
  };
  time: any;
  notes: string[];
}

/**
 * Images Pipeline
 */
export interface ImageForPipeline {
  id?: string;
  imageUrl: string;
  from: string;
  processed: boolean;
  processedAt?: any;
  submittedAt: any;
}

/**
 * Entity Types
 */
export interface Customer {
  id?: string;
  intuitId?: string;
  name?: string;
  address?: Address;
  email?: string;
  phone?: string;
  active?: boolean;
  balance?: number;
  createdTime?: any;
}

export interface Address {
  city: string;
  countrySubDivisionCode: string;
  id: string;
  lat: string;
  lng: string;
  line1: string;
  line2: string;
  postalCode: string;
}
