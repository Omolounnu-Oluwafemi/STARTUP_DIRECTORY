export const replaceTemplate = (temp, startup) =>{
    let output = temp.replace(/{%LOGO%}/g, startup.logo)
    output = output.replace(/{%ORGANIZATION%}/g, startup.organization)
    output = output.replace(/{%INDUSTRY%}/g, startup.industry)
    output = output.replace(/{%CREATED_AT%}/g, startup.createdAt)
    output = output.replace(/{%PRODUCTS%}/g, startup.products)
    output = output.replace(/{%ADDRESS%}/g, startup.address)
    output = output.replace(/{%CEO%}/g, startup.ceo)
    output = output.replace(/{%COUNTRIES_OPERATING%}/g, startup.countriesOperating)
    output = output.replace(/{%NO_OF_EMPLOYEES%}/g, startup.noOfEmployees)
    output = output.replace(/{%DESCRIPTION%}/g, startup.description)
    output = output.replace(/{%ID%}/g, startup.id)
  
    return output;
  }