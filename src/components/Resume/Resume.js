import React, { useContext, useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import styled from "styled-components";
import {  } from "@apollo/client";





import Loader from "../../utils/Loader";
import Introduction from "./Introduction";
import Stats from "./Stats";
import Repositories from "./Repositories";
import Contributions from "./Contributions";
import Footer from "./Footer";
import { ConfigContext } from "./";

const Main = styled.div`
  
  color: #333;
  width: 800px;
  height: none;
  margin: 0 auto 2rem;
  min-height: 100vh;
  box-shadow: 1px 2px 3px 2px grey;
  padding: 2rem;
  text-align: left;
  background: white;
`;

function Resume({ titleColor }) {
  const {
    config: {
      repositories: { showPinned },
    },
  } = useContext(ConfigContext);
  const { username } = useParams();
  // const { loading, error, data } = useQuery(PUBLIC_USER_DETAILS, {
  //   variables: { username },
  // });
  const [repo, setRepo] = useState({});
  const [data, setData] = useState({});

  
  




  useEffect(() => {
    setRepo(showPinned);
  }, [showPinned]);
  useEffect(() => {
    fetch("https://github-resume-maker.herokuapp.com/user/"+username).then(res=>res.json()).then(res=>{
    setData(res.basic)
    setRepo(res.repositories)
    })
  }, [username]);

console.log(data);
console.log(repo);




  //if (loading) return <Loader />;
  //if (error)
     //return (
       //<div>
         //<p>Unexpected Error: Invalid Username or API error {console.log(error)}</p>
         //<Link to="/">Go back</Link>
      // </div>
    // );
  return (
    <div>   
      {data &&
      <Main id="resume">
      <Introduction
        name={data.name}
        username={data.login}
        bio={data.bio}
        avatarUrl={data.avatar_url}
        location={data.location}
        createdAt={data.created_at}
      />
      <Stats
        contributions={data.contributionsCollection}
        followers={data.followers}
        following={data.following}
        repoCount={data.public_repos}
        pkgCount={data?.user?.packages?.totalCount}
        bountyHunter={data?.user?.isBountyHunter}
        campusExpert={data?.user?.isCampusExpert}
        devMember={data?.user?.isDeveloperProgramMember}
        employee={data?.user?.isEmployee}
        hireable={data?.user?.isHireable}
        githubUrl={data?.user?.url}
        websiteUrl={data?.user?.websiteUrl}
        starredRepoCount={data?.user?.starredRepositories?.totalCount}
        titleColor={titleColor}
      />
      <Repositories
        repoList={repo}
       
      
      />
      { /*{repo?.length>0 && <>
      
      {repo?.map((res)=>{
        return(
          <h1>
            {res?.name}
          </h1>
        )
      })}</>} */}
      {data?.user?.contributionsCollection?.totalPullRequestContributions && (
        <Contributions
          repoList={data?.user?.contributionsCollection?.pullRequestContributionsByRepository}
          titleColor={titleColor}
        />
      )}
      <Footer
        username={data.login}
        githubUrl={data.url}
        websiteUrl={data.websiteUrl}
        twitterUsername={data.twitter_username}
      />
    </Main> }
    </div>
  );
}

export default Resume;