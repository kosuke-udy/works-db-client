import { useQuery, gql } from '@apollo/client';
import { stringifyForDisplay } from '@apollo/client/utilities';
import './App.css'
import { useWorksQuery, WorksQuery } from './types/generated/graphql';

const App = () : JSX.Element => {
  return (
    <div>
      <h2>Works DB</h2>
      <WorkList />
    </div>
  );
};
export default App;

gql`
  query works {
    works {
      originalTitle
    }
  }
`;

const WorkList = () : JSX.Element => {
  const { loading, error, data } = useWorksQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (data == undefined) return <p>Data: Undefined</p>;
  if (typeof data.works == null) return <p>Type of data.works is null</p>;
  if (data.works == undefined) return <p>data.works is undefined</p>;
  if (data.works == null) return <p>data.works is null</p>;
  if (data.works.values() == null) return <p>typeof data.works.values is null</p>

  const works: Array<string> = data.works.map((value => 
    value?.originalTitle ?? ''
  ));

  return (
    <div>
      {
        works.map((
          value, index, array
        ) => (
          <div key={value}>
            <p>{value}</p>
          </div>
        ))
      }
    </div>
  );
};