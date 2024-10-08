import HomePage from './pages/HomePage';

const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  return response.json();
};

const Page = async () => {
  const baseUrl = process.env.API_BASE_URL;

  try {
    const [users, jobs] = await Promise.all([fetchData(`${baseUrl}/users`), fetchData(`${baseUrl}/jobs`)]);

    return (
      <div>
        <HomePage data={{ users, jobs }} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading data. Please try again later.</div>;
  }
};

export default Page;
