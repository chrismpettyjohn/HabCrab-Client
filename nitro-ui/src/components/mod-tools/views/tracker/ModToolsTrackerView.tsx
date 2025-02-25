import { ILinkEventTracker } from "@nitrots/nitro-renderer";
import { useEffect, useState } from "react";
import { AddEventLinkTracker, RemoveLinkEventTracker } from "../../../../api";
import { TrackerList } from "./TrackerTable";

export function ModToolsTrackerView() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const linkTracker: ILinkEventTracker = {
      linkReceived: (url: string) => {
        const parts = url.split("/");

        if (parts.length < 3) return;

        switch (parts[2]) {
          case "toggle":
            setVisible((_) => !_);
            return;
        }
      },
      eventUrlPrefix: "mod-tools/trackers",
    };

    AddEventLinkTracker(linkTracker);

    return () => RemoveLinkEventTracker(linkTracker);
  }, [setVisible]);

  if (!visible) {
    return null;
  }

  return <TrackerList />;
}
