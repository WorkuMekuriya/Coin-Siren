import HomePage from './pages/HomePage';

const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  const data = await response.json();
  if (!data.success) {
    throw new Error(`Error: ${data.message}`);
  }
  return data.data;
};

const Page = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  console.log(baseUrl);

  try {
    const [users, jobs] = await Promise.all([fetchData(`${baseUrl}/users`), fetchData(`${baseUrl}/jobs`)]);

    return (
      <div>
        <HomePage data={{ users, jobs }} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading data. Please try again later. {JSON.stringify(error)}</div>;
  }
};

export default Page;
