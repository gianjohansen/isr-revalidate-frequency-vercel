type Params = Promise<{ dynamicId: string }>;

export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  return []; // no generated pages at build time
}

export default async function DynamicPage({ params }: { params: Params }) {
  const { dynamicId } = await params;

  const buildTime = new Date().toLocaleTimeString();
  const nextBuildTime = new Date(Date.now() + revalidate * 1000).toLocaleTimeString();
  
  return (
    <div className="flex flex-col gap-1 items-center justify-center h-screen">
      <p>Dynamic ID: {dynamicId}</p>
      <p>Last built at: <strong>{buildTime} (UTC)</strong></p>
      <p>Should regenerate at: <strong>{nextBuildTime} (UTC)</strong></p>
    </div>
  );
}
