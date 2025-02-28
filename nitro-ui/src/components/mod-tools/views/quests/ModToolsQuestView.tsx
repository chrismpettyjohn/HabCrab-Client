import { useEffect, useState } from "react";
import {
  DraggableWindowPosition,
  NitroCardContentView,
  NitroCardHeaderView,
  NitroCardTabsItemView,
  NitroCardTabsView,
  NitroCardView,
} from "../../../../common";
import { AddEventLinkTracker, CreateLinkEvent, RemoveLinkEventTracker } from "../../../../api";
import { ILinkEventTracker } from "@nitrots/nitro-renderer";
import { QuestsGrid } from "./quests/QuestsGrid";
import { QuestsViewOne } from "./quests/QuestsViewOne";
import { QuestsCreate } from "./quests/QuestsCreate";
import { TrackersGrid } from "./trackers/TrackersGrid";
import { TrackersViewOne } from "./trackers/TrackersViewOne";
import { TrackersCreate } from "./trackers/TrackersCreate";

const QUEST_TABS: Array<{ path: string; title: string }> = [
  {
    path: "mod-tools/manage-quests/quests",
    title: "Quests",
  },
  {
    path: "mod-tools/manage-quests/trackers",
    title: "Trackers",
  },
];

export function ModToolsQuestView() {
  const [path, setPath] = useState("");
  const [view, setView] = useState(<QuestsGrid />);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const linkTracker: ILinkEventTracker = {
      linkReceived: (url: string) => {
        setPath(url);
        const parts = url.split("/");

        if (parts.length > 3) {
          switch (`${parts[2]}/${parts[3]}`) {
            case "quests/create":
              setView(<QuestsCreate />);
              return;
            case "quests/view":
              const questId = Number(parts[4]);
              setView(<QuestsViewOne questId={questId} />);
              return;
            case "trackers/create":
              setView(<TrackersCreate />);
              return;
            case "trackers/view":
              const trackerId = Number(parts[4]);
              setView(<TrackersViewOne trackerId={trackerId} />);
              return;
          }

          return;
        }

        if (parts.length === 3) {
          switch (parts[2]) {
            case "toggle":
              setPath("mod-tools/manage-quests/quests");
              setVisible((_) => !_);
              setView(<QuestsGrid />);
              return;
            case "trackers":
              setView(<TrackersGrid />);
              return;
            case "quests":
              setView(<QuestsGrid />);
              return;
          }
        }
      },
      eventUrlPrefix: "mod-tools/manage-quests",
    };

    AddEventLinkTracker(linkTracker);

    return () => RemoveLinkEventTracker(linkTracker);
  }, [setVisible]);

  if (!visible) return null;

  return (
    <NitroCardView className="nitro-mod-tools-quest" theme="primary-slim" windowPosition={DraggableWindowPosition.TOP_LEFT} style={{ width: 600 }}>
      <NitroCardHeaderView onCloseClick={() => setVisible(false)} />
      <NitroCardTabsView>
        {QUEST_TABS.map((_) => {
          return (
            <NitroCardTabsItemView key={`quest_tab_${_.path}`} isActive={path.includes(_.path)} onClick={() => CreateLinkEvent(_.path)}>
              {_.title}
            </NitroCardTabsItemView>
          );
        })}
      </NitroCardTabsView>
      <NitroCardContentView className="h-100">{view}</NitroCardContentView>
    </NitroCardView>
  );
}
