// this utility function converts the date to a human readable format

export default function formatDate(dateLike?: string | Date | null) {
  if (!dateLike) return "";
  const date = new Date(dateLike);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
