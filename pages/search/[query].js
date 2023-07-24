import Layout from "../../components/Layout";
import { search } from "../api";

export default function News({ results, query }) {
  return (
    <Layout>
      <h1 className="main-heading">
        <em>Result for : </em> {query}
      </h1>
      <ul>
        {results.map((result) => {
          return (
            <li key={result.uri} className="news-card">
              <a href={result.url} target="_blank" rel="noopener norefferer">
                {result.title}
              </a>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

// to register for a new New York Times API KEY, visit :
const API_KEY = "9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ";
export async function getServerSideProps({ params }) {
  const query = params.query;
  const results = await search(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`
  );
  return { props: { results, query } };
}
