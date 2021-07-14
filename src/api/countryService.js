export const getAllCountries = async () => {
  const result = await fetch("https://restcountries.eu/rest/v2/all");
  if (!result.ok) {
    return [];
  }
  return await result.json();
};
