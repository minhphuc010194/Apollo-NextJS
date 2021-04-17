import Head from 'next/head'
import {useQuery} from '@apollo/client'
import styles from '../styles/Home.module.css'
import { Query_test } from 'querys';
import { initializeApollo } from 'src/apollo';

export default function Home({initializeApolloState}) {
  
  
  // const { data, loading } = useQuery(Query_test);
  
  // if (loading) return <span>loading...</span>;

  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(initializeApolloState, null, 2)}</pre>
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: Query_test,
  })
  return {
    props: {
      initializeApolloState: apolloClient.cache.extract(),
    }
  }
}