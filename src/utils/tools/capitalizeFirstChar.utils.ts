export default function capitalizeFirstChar(str: string) {
  const tmp = str.toLowerCase();
  return tmp.charAt(0).toUpperCase() + tmp.slice(1);
}
