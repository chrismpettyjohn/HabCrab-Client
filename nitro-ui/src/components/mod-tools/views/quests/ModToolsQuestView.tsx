import { useEffect, useMemo, useState } from "react";
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

const QUEST_TABS: Array<{ path: string; title: string; children: JSX.Element }> = [
  {
    path: "mod-tools/quests/",
    title: "Quests",
    children: <p>Quests</p>,
  },
  {
    path: "mod-tools/quests/tasks",
    title: "Tasks",
    children: <p>Tasks</p>,
  },
  {
    path: "mod-tools/quests/trackers",
    title: "Trackers",
    children: <p>Trackers</p>,
  },
];

export function ModToolsQuestView() {
  const [tab, setTab] = useState(QUEST_TABS[0]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const linkTracker: ILinkEventTracker = {
      linkReceived: (url: string) => {
        const parts = url.split("/");

        if (parts.length < 3) return;

        switch (parts[2]) {
          case "":
            setTab(QUEST_TABS[0]);
            return;
          case "toggle":
            setVisible((_) => !_);
            setTab(QUEST_TABS[0]);
            return;
          case "tasks":
            setTab(QUEST_TABS[1]);
            return;
          case "trackers":
            setTab(QUEST_TABS[2]);
            return;
        }
      },
      eventUrlPrefix: "mod-tools/quests",
    };

    AddEventLinkTracker(linkTracker);

    return () => RemoveLinkEventTracker(linkTracker);
  }, [setVisible]);

  if (!visible) return null;

  return (
    <NitroCardView className="nitro-mod-tools-quest" theme="primary-slim" windowPosition={DraggableWindowPosition.TOP_LEFT} style={{ width: 600 }}>
      <NitroCardHeaderView headerText="Manage Quests" onCloseClick={() => setVisible(false)} />
      <NitroCardTabsView>
        {QUEST_TABS.map((_, index) => {
          return (
            <NitroCardTabsItemView key={`quest_tab_${_.path}`} isActive={tab === _} onClick={() => CreateLinkEvent(_.path)}>
              {_.title}
            </NitroCardTabsItemView>
          );
        })}
      </NitroCardTabsView>
      <NitroCardContentView className="h-100">{tab?.children}</NitroCardContentView>
    </NitroCardView>
  );
}
