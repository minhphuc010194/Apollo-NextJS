import { gql } from "@apollo/client";

//----------------QUERYS--------------------->
export const Query_Countries = gql`
    query(){
        countries {
          code
          name
          emoji
        }
    }
`

//----------------MUTATION------------------->


//----------------SUSCRIPTIONS----------------->


//-------------------QUERYS_LOCAL-------------->

//-------------------MUTATION_LOCAL------------->


//-------------------SUBSCRIPTIONS_LOCAL---------->