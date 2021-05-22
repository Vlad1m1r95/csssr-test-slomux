export function is(x, y) {
  //числа, строки
  if (x === y) {
    //булевые значения
    //приведение типов  js
    // 1 / true === 1
    // 1 / false ===  Infinity

    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    //массивы, объекты
    return x !== x && y !== y;
  }
}

export function compareEqual(obj1, obj2) {
  //строка или число
  if (is(obj1, obj2)) return true;

  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  // если оба параметра являюстя массивами
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;

    for (let i = 0; i < obj1.length; i++) {
      if (!is(obj1[i], obj2[i])) {
        return false;
      }
    }

    return true;
  }

  // проверка объектов
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let i = 0; i < keys1.length; i++) {
    if (!obj1.hasOwnProperty(keys2[i]) || !is(obj1[keys1[i]], obj2[keys2[i]])) {
      return false;
    }
  }

  return true;
}
