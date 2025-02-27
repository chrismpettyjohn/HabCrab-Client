import { IMessageEvent } from "../../../../../../api";
import { MessageEvent } from "../../../../../../events";
import { QuestTaskDataEventParser } from "../../../parser";

export class QuestTaskDataEvent extends MessageEvent implements IMessageEvent {
  constructor(callBack: Function) {
    super(callBack, QuestTaskDataEventParser);
  }

  public getParser(): QuestTaskDataEventParser {
    return this.parser as QuestTaskDataEventParser;
  }
}
