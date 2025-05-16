export interface SolarInputs {
  location: string;
  roofArea: number;
  electricityUsage: number;
  roofAngle?: number;
  shading?: number;
}

export interface SolarResults {
  systemSize: number;
  panelsRequired: number;
  annualEnergyProduction: number;
  monthlySavings: number;
  paybackPeriod: number;
  co2Reduction: number;
  lifetimeSavings: number;
}

// Utility functions for solar calculations
export const calculateSystemSize = (roofArea: number): number => {
  // Assuming 15% of roof area can be used for panels
  return roofArea * 0.15;
};

export const calculatePanelsRequired = (systemSize: number): number => {
  // Assuming 1.6m² per panel
  return Math.floor(systemSize / 1.6);
};

export const calculateAnnualEnergy = (
  systemSize: number,
  location: string,
  shading: number = 0
): number => {
  // This would typically use location-specific solar irradiance data
  // For now, using a simplified calculation
  const baseProduction = systemSize * 1000; // 1000 kWh per kW per year
  return baseProduction * (1 - shading / 100);
};

export const calculateMonthlySavings = (
  annualEnergy: number,
  electricityRate: number = 0.15
): number => {
  return (annualEnergy * electricityRate) / 12;
};

export const calculateCO2Reduction = (annualEnergy: number): number => {
  // Assuming 0.5 kg CO2 per kWh
  return annualEnergy * 0.5;
};

export const calculateLifetimeSavings = (
  annualEnergy: number,
  electricityRate: number = 0.15,
  lifetime: number = 25
): number => {
  return annualEnergy * electricityRate * lifetime;
}; 