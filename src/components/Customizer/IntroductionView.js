import React, { useState, useEffect, useContext } from "react";

import { WrapperDiv } from "./style";
import { ConfigContext } from "../Resume";

const IntroductionView = () => {
  const { config, setConfig } = useContext(ConfigContext);
  const [showBio, setShowBio] = useState(config?.intro?.bio || true);
  const [showLocation, setShowLocation] = useState(config?.intro?.location || true);
  const [showJoinedYear, setShowJoinedYear] = useState(config?.intro?.joinedYear || false);
  const [showAvatar, setShowAvatar] = useState(config?.intro?.avatar || true);

  useEffect(() => {
    setConfig({ ...config, intro: { ...config.intro, bio: showBio } });
    // eslint-disable-next-line
  }, [showBio]);

  useEffect(() => {
    setConfig({ ...config, intro: { ...config.intro, location: showLocation } });
    // eslint-disable-next-line
  }, [showLocation]);

  useEffect(() => {
    setConfig({ ...config, intro: { ...config.intro, joinedYear: showJoinedYear } });
    // eslint-disable-next-line
  }, [showJoinedYear]);

  useEffect(() => {
    setConfig({ ...config, intro: { ...config.intro, avatar: showAvatar } });
    // eslint-disable-next-line
  }, [showAvatar]);

  return (
    <WrapperDiv>
      <h4>Customize Introduction</h4>
      <label>
        Show Bio:
        <input type="checkbox" checked={showBio} onChange={(e) => setShowBio(e.target.checked)} />
      </label>
      <label>
        Show Location:
        <input
          type="checkbox"
          checked={showLocation}
          onChange={(e) => setShowLocation(e.target.checked)}
        />
      </label>
      <label>
        Show Joined Year:
        <input
          type="checkbox"
          checked={showJoinedYear}
          onChange={(e) => setShowJoinedYear(e.target.checked)}
        />
      </label>
      <label>
        Show Avatar:
        <input
          type="checkbox"
          checked={showAvatar}
          onChange={(e) => setShowAvatar(e.target.checked)}
        />
      </label>
    </WrapperDiv>
  );
};
export default IntroductionView;