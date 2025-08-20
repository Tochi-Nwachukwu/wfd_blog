// this utility function gets the hostname for the social sharing component
import { headers } from "next/headers";



export default async function getHostname() {
  const headersList = await headers();
  const domainHost = headersList.get("host");

  return domainHost;
}
