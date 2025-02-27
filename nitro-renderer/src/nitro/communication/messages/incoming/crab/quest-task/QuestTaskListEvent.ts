import { IMessageEvent } from "../../../../../../api";
import { MessageEvent } from "../../../../../../events";
import { QuestTaskListEventParser } from "../../../parser";

export class QuestTaskListEvent extends MessageEvent implements IMessageEvent {
  constructor(callBack: Function) {
    super(callBack, QuestTaskListEventParser);
  }

  public getParser(): QuestTaskListEventParser {
    return this.parser as QuestTaskListEventParser;
  }
}
