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
console.log(data.location)
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
        name={data.name}
        username={data.login}
        bio={data.bio}
        avatarUrl={data.avatar_url}
        location={data.location}
        createdAt={data.createdAt}
      />
      <Stats
        contributions={data.contributionsCollection}
        followers={data.followers}
        following={data?.following}
        repoCount={data.repositories}
        pkgCount={data.packages}
        bountyHunter={data.isBountyHunter}
        campusExpert={data.isCampusExpert}
        devMember={data.isDeveloperProgramMember}
        employee={data.isEmployee}
        hireable={data.isHireable}
        githubUrl={data.html_url}
        websiteUrl={data.websiteUrl}
        starredRepoCount={data.starredRepositories}
        titleColor={titleColor}
      />
      <Repositories
        repoList={repo ? data.pinnedItems?.nodes : data.repositories?.nodes}
        username={username}
        titleColor={titleColor}
      />
      {data.contributionsCollection?.totalPullRequestContributions && (
        <Contributions
          repoList={data.contributionsCollection?.pullRequestContributionsByRepository}
          titleColor={titleColor}
        />
      )}
      <Footer
        username={username}
        githubUrl={data.html_url}
        websiteUrl={data.websiteUrl}
        twitterUsername={data.twitterUsername}
      />
    </Main> }
    </div>
  );
}

export default Resume;