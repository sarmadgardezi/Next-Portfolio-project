type GetBaseUrlOptions = {
  omitProtocol?: boolean;
};

export const getBaseUrl = (options?: GetBaseUrlOptions) => {
  if (typeof window !== 'undefined')
  
  if (process.env.NODE_ENV === 'development') {
    return options?.omitProtocol ? 'localhost:3000' : 'http://localhost:3000';
  }

  return options?.omitProtocol
    ? 'sarmadgardezi.com'
    : 'https://sarmadgardezi.com';
};
