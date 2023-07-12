import { getCountryByName } from "@/api/requests";
import CountryDetail from "@/components/CountryDetail";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";

export default function Page() {
  const param = usePathname()?.slice(1);
  
  const { error, isLoading, data: country } = useQuery({
    queryKey: ["data", { param }],
    queryFn: () => getCountryByName(param),
  });

  if (error) {
    return (<div>Something wrong happened, please try again</div>)
  }

  if (isLoading) {
    return (<div>Loading...</div>)
  }

  return country ? (
    <div className="px-5 py-10 sm:px-20 sm:pt-16">
      <CountryDetail country={country}/>
    </div>
  ) : null;
}
