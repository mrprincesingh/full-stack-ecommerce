
export async function fetchCount(amount = 1) {
  return new Promise(async(resolve) =>{
    const responce  = await fetch("http://localhost:8080")
    const data = await Response.json()
    resolve({data})
  }
  );
}
