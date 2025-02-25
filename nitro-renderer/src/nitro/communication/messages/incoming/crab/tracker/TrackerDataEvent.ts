import { IMessageEvent } from "../../../../../../api";
import { MessageEvent } from "../../../../../../events";
import { TrackerDataEventParser } from "../../../parser";

export class TrackerDataEvent extends MessageEvent implements IMessageEvent {
  constructor(callBack: Function) {
    super(callBack, TrackerDataEventParser);
  }

  public getParser(): TrackerDataEventParser {
    return this.parser as TrackerDataEventParser;
  }
}
