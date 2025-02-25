import { IMessageEvent } from "../../../../../../api";
import { MessageEvent } from "../../../../../../events";
import { TrackerListEventParser } from "../../../parser";

export class TrackerListEvent extends MessageEvent implements IMessageEvent {
  constructor(callBack: Function) {
    super(callBack, TrackerListEventParser);
  }

  public getParser(): TrackerListEventParser {
    return this.parser as TrackerListEventParser;
  }
}
