import React from "react";

//import Repo from "./Repo";
import { Wrapper } from "./styles";
//import { ConfigContext } from "./";


  const Repositories = ({repoList}) =>{
    return(
      
      <h2 >TopRepositoriesName

      {
        repoList?.length>0 &&
        <>
        {repoList?.map((res)=>{
          
          return(
          
          <Wrapper>
            
          
            <ul>
              
                Repository:
            {res.name}
            

            </ul>
            <ul>
              Description:
              {res.desc}
            </ul>
            <ul>
              Watchers:
              {res.watchers}
            </ul>
          
          
          </Wrapper>
          
          )
        })}
        </>
      }
      
      
      
      </h2>
      
      
    )
  }








      /*             
    // <Wrapper>
    //   <h2 style={{ color: titleColor || "" }}>Top Repositories</h2>
    //   <div style={{ margin: "1rem 0 0 1rem" }}>
    //     {
    //     list?.map((repo, i) => {
    //       if (count < i + 1) return null;
    //       if (!isUserOwnerOfRepository(username, repo)) {
    //         return null;
    //       }

    //       return (
           
    //         <Repo
    //           key={repo.id}
    //           forks={repo.forkCount}
    //           languages={repo.languages}
    //           homepageUrl={repo.homepageUrl}
    //           name={repo.name}
    //           description={repo.shortDescriptionHTML}
    //           stars={repo.stargazers.totalCount}
    //           url={repo.url}
    //         />
    //       );
    //     })}
    //   </div> 
    // </Wrapper>
  */

export default Repositories;