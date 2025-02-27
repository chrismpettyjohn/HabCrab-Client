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

const QUEST_TABS: Array<{ path: string; title: string; children: JSX.Element }> = [
  {
    path: "mod-tools/manage-quests/quests",
    title: "Quests",
    children: <QuestsGrid />,
  },
  {
    path: "mod-tools/manage-quests/trackers",
    title: "Trackers",
    children: <p>Trackers</p>,
  },
  {
    path: "mod-tools/manage-quests/tasks",
    title: "Tasks",
    children: <p>Tasks</p>,
  },
];

export function ModToolsQuestView() {
  const [path, setPath] = useState("");
  const [view, setView] = useState(QUEST_TABS[0].children);
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
          }

          return;
        }

        if (parts.length === 3) {
          switch (parts[2]) {
            case "toggle":
              setVisible((_) => !_);
              setView(QUEST_TABS[0].children);
              return;
            case "tasks":
              setView(QUEST_TABS[2].children);
              return;
            case "trackers":
              setView(QUEST_TABS[3].children);
              return;
            case "quests":
              setView(QUEST_TABS[0].children);
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
      <NitroCardHeaderView headerText="Manage Quests" onCloseClick={() => setVisible(false)} />
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
