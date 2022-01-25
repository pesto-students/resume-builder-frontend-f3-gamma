import React, { useContext, useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import styled from "styled-components";
import {  } from "@apollo/client";





//import Loader from "../../utils/Loader";
import Introduction from "./Introduction";
import Stats from "./Stats";
import Repositories from "./Repositories";
import Contributions from "./Contributions";
import Footer from "./Footer";
import { ConfigContext } from "./";

const Main = styled.div`
  color: #333;
  width: 800px;
  height: 100vh;
  margin: 0 auto 2rem;
  min-height: 100vh;
  box-shadow: 1px 2px 3px 2px grey;
  padding: 2rem;
  text-align: left;
  // background: lightblue;
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
  const [repo, setRepo] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setRepo(showPinned);
  }, [showPinned]);
  useEffect(() => {
    fetch("https://api.github.com/users/"+username).then(res=>res.json()).then(res=>{
    setData(res)
    })
  }, [username]);
console.log(data)
  // if (loading) return <Loader />;
  // if (error)
  //   return (
  //     <div>
  //       <p>Unexpected Error: Invalid Username or API error {console.log(error)}</p>
  //       <Link to="/">Go back</Link>
  //     </div>
  //   );
  return (
    <div>   
      {data &&
      <Main id="resume">
      <Introduction
        name={data?.user?.name}
        username={username}
        bio={data?.user?.bio}
        avatarUrl={data?.user?.avatarUrl}
        location={data?.user?.location}
        createdAt={data?.user?.createdAt}
      />
      <Stats
        contributions={data?.user?.contributionsCollection}
        followers={data?.user?.followers?.totalCount}
        following={data?.user?.following?.totalCount}
        repoCount={data?.user?.repositories?.totalCount}
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
        repoList={repo ? data?.user?.pinnedItems?.nodes : data?.user?.repositories?.nodes}
        username={username}
        titleColor={titleColor}
      />
      {data?.user?.contributionsCollection?.totalPullRequestContributions && (
        <Contributions
          repoList={data?.user?.contributionsCollection?.pullRequestContributionsByRepository}
          titleColor={titleColor}
        />
      )}
      <Footer
        username={username}
        githubUrl={data?.user?.url}
        websiteUrl={data?.user?.websiteUrl}
        twitterUsername={data?.user?.twitterUsername}
      />
    </Main> }
    </div>
  );
}

export default Resume;