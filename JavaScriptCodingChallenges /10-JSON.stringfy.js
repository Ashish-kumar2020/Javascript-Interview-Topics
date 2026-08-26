function myStringify(value) {
  if (value === null) return "null";

  if (typeof value === "number") {
    return Number.isFinite(value) ? String(value) : "null";
  }

  if (typeof value === "boolean") return String(value);

  if (typeof value === "string") {
    return `"${value.replace(/"/g, '\\"')}"`;
  }

  if (
    typeof value === "function" ||
    typeof value === "symbol" ||
    typeof value === "undefined"
  )
    return undefined;

  if (value instanceof Date) {
    return isNaN(value.getTime()) ? "null" : `"${value.toISOString()}"`;
  }

  if (Array.isArray(value)) {
    let jsonArray = value.map((item) => {
      const res = myStringify(item);
      return res === undefined ? "null" : res;
    });
    return `[${jsonArray.join(",")}]`;
  }
  if (typeof value === "object") {
    const jsonObject = [];
    for (let key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        const res = myStringify(value[key]);
        if (res !== undefined) {
          const escapedKey = key.replace(/"/g, '\\"');
          jsonObject.push(`"${escapedKey}":${res}`);
        }
      }
    }
    return `{${jsonObject.join(",")}}`;
  }
}

console.log(myStringify(null));
console.log(JSON.stringify(null));

console.log(myStringify(true));
console.log(JSON.stringify(true));

console.log(myStringify(42));
console.log(JSON.stringify(42));

console.log(myStringify("Hello"));
console.log(JSON.stringify("Hello"));
