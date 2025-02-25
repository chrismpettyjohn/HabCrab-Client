import { IMessageEvent } from "../../../../../../api";
import { MessageEvent } from "../../../../../../events";
import { QuestDataEventParser } from "../../../parser";

export class QuestDataEvent extends MessageEvent implements IMessageEvent {
  constructor(callBack: Function) {
    super(callBack, QuestDataEventParser);
  }

  public getParser(): QuestDataEventParser {
    return this.parser as QuestDataEventParser;
  }
}
