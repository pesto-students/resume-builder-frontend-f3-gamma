import React from "react";

//import Repo from "./Repo";
import { Wrapper } from "./styles";
//import { ConfigContext } from "./";


  const Repositories = ({repoList}) =>{
    return(
      <>
      <h2 >TopRepositories</h2>

      {
        repoList?.length>0 &&
        <>
        {repoList?.map((res)=>{
          
          return(
          
          <Wrapper>
            
          
            <ul>
              
             <h5 color="blue"> 
            {res.name}</h5>
            

            </ul>
            <ul>
              <h6>
              
              {res.desc}</h6>
            </ul>
            <ul>
              
              watchers:
              {res.watchers}
            </ul>
          
          
          
          </Wrapper>
          
          )
        })}
        </>
      }
      
      
      
      </>
      
      
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