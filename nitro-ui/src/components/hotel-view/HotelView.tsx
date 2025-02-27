import { NitroConfiguration, RoomSessionEvent } from "@nitrots/nitro-renderer";
import { FC, useState } from "react";
import { GetConfiguration } from "../../api";
import { LayoutAvatarImageView } from "../../common";
import { useRoomSessionManagerEvent, useSessionInfo } from "../../hooks";
import { WidgetSlotView } from "./views/widgets/WidgetSlotView";

const widgetSlotCount = 7;

export const HotelView: FC<{}> = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const { userFigure = null } = useSessionInfo();

  useRoomSessionManagerEvent<RoomSessionEvent>([RoomSessionEvent.CREATED, RoomSessionEvent.ENDED], (event) => {
    switch (event.type) {
      case RoomSessionEvent.CREATED:
        setIsVisible(false);
        return;
      case RoomSessionEvent.ENDED:
        setIsVisible(event.openLandingView);
        return;
    }
  });

  if (!isVisible) return null;
  return (
    <div className="nitro-hotel-view">
      <iframe
        style={{ height: "150%", width: "150%", objectFit: "contain", pointerEvents: "none", transform: "translate(-18%, -18%)" }}
        src="https://www.youtube.com/embed/LDU_Txk06tM?si=4FxQ64NueQs0qkqK&autoplay=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
