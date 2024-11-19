export const validateJSON = (json: string): { valid: boolean; error?: string } => {
  try {
    JSON.parse(json);
    return { valid: true };
  } catch (error) {
    return { valid: false, error: (error as Error).message };
  }
};
