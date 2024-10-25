
export function delay(duration: number){
  if(duration < 0) throw new Error('Duration must be greater than 0');
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}