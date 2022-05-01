import getIdFromUrl from "../utils/getIdFromUrl"

describe("detIdFromUrl", () => {
  test("Return the id from single digit", () => {
    // Case1
    // Arrange
    let url = "https://pokeapi.co/api/v2/pokemon/1/"
    let expectedId = "1"

    // Act 
    let result = getIdFromUrl(url);

    // Assert
    expect(result).toBe(expectedId);

    // Case 2
    // Arrange
    url = "https://pokeapi.co/api/v2/pokemon/2/"
    expectedId = "2"
    
    // Act
    result = getIdFromUrl(url);

    // Assert
    expect(result).toBe(expectedId);
  })
  test("Return the id from two digits url", ()=>{
    let url = "https://pokeapi.co/api/v2/pokemon/12/"
    let expectedId = "12"

    // Act 
    let result = getIdFromUrl(url);

    // Assert
    expect(result).toBe(expectedId);
  })
})
