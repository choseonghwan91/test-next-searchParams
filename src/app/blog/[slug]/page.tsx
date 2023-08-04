export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log(searchParams);

  return (
    <h1>
      My Page
      <div>{JSON.stringify(searchParams)}</div>
    </h1>
  );
}
