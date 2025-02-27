import { FriendlyTime, HabboClubLevelEnum } from "@nitrots/nitro-renderer";
import { FC } from "react";
import { LocalizeText } from "../../api";
import { Text } from "../../common";
import { usePurse } from "../../hooks";

export const PurseView: FC<{}> = (props) => {
  const { purse = null } = usePurse();
  const getClubText = (() => {
    if (!purse) return null;

    const totalDays = purse.clubPeriods * 31 + purse.clubDays;
    const minutesUntilExpiration = purse.minutesUntilExpiration;

    if (purse.clubLevel === HabboClubLevelEnum.NO_CLUB) return LocalizeText("purse.clubdays.zero.amount.text");
    else if (minutesUntilExpiration > -1 && minutesUntilExpiration < 60 * 24) return FriendlyTime.shortFormat(minutesUntilExpiration * 60);
    else return FriendlyTime.shortFormat(totalDays * 86400);
  })();

  if (!purse) return null;

  return (
    <div style={{ marginTop: 20 }}>
      <div className="nitro-purse-container">
        <div className="icon-credits" />
        <Text bold fontSize={3} variant="white">
          {Number(purse.credits).toLocaleString()}
        </Text>
      </div>
      <br />
      <div className="nitro-purse-container">
        <div className="icon-club" />
        <Text bold fontSize={3} variant="white">
          {getClubText}
        </Text>
      </div>
    </div>
  );
};
