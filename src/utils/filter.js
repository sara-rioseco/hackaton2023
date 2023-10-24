//filtrar en buscador
export function filterData(data, search) {
    return data.filter((item) => {
      return Object.values(item).some((value) => {
        if (typeof value === "object" && typeof value.value === "string") {
          return value.value.toLowerCase().includes(search.toLowerCase());
        } else if (typeof value === "string") {
          return value.toLowerCase().includes(search.toLowerCase());
        }
        return false;
      });
    });
  }
  